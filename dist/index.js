var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  activeSessions: () => activeSessions,
  activityLogs: () => activityLogs,
  appUsers: () => appUsers,
  applications: () => applications,
  blacklist: () => blacklist,
  insertActivityLogSchema: () => insertActivityLogSchema,
  insertAppUserSchema: () => insertAppUserSchema,
  insertApplicationSchema: () => insertApplicationSchema,
  insertBlacklistSchema: () => insertBlacklistSchema,
  insertLicenseKeySchema: () => insertLicenseKeySchema,
  insertWebhookSchema: () => insertWebhookSchema,
  licenseKeys: () => licenseKeys,
  loginSchema: () => loginSchema,
  sessions: () => sessions,
  updateAppUserSchema: () => updateAppUserSchema,
  updateApplicationSchema: () => updateApplicationSchema,
  users: () => users,
  webhooks: () => webhooks
});
import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  boolean,
  integer
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull()
  },
  (table) => [index("IDX_session_expire").on(table.expire)]
);
var users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: varchar("role").notNull().default("user"),
  // 'owner', 'admin', 'moderator', 'user'
  permissions: text("permissions").array().notNull().default([]),
  // Array of specific permissions
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  apiKey: text("api_key").notNull().unique(),
  version: text("version").notNull().default("1.0.0"),
  isActive: boolean("is_active").notNull().default(true),
  hwidLockEnabled: boolean("hwid_lock_enabled").notNull().default(false),
  // Custom messages for different scenarios
  loginSuccessMessage: text("login_success_message").default("Login successful!"),
  loginFailedMessage: text("login_failed_message").default("Invalid credentials!"),
  accountDisabledMessage: text("account_disabled_message").default("Account is disabled!"),
  accountExpiredMessage: text("account_expired_message").default("Account has expired!"),
  versionMismatchMessage: text("version_mismatch_message").default("Please update your application to the latest version!"),
  hwidMismatchMessage: text("hwid_mismatch_message").default("Hardware ID mismatch detected!"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var licenseKeys = pgTable("license_keys", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").notNull().references(() => applications.id, { onDelete: "cascade" }),
  licenseKey: text("license_key").notNull().unique(),
  maxUsers: integer("max_users").notNull().default(1),
  currentUsers: integer("current_users").notNull().default(0),
  validityDays: integer("validity_days").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var appUsers = pgTable("app_users", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").notNull().references(() => applications.id, { onDelete: "cascade" }),
  licenseKeyId: integer("license_key_id").references(() => licenseKeys.id, { onDelete: "set null" }),
  username: text("username").notNull(),
  password: text("password").notNull(),
  email: text("email"),
  isActive: boolean("is_active").notNull().default(true),
  isPaused: boolean("is_paused").notNull().default(false),
  hwid: text("hwid"),
  // Hardware ID for locking
  expiresAt: timestamp("expires_at"),
  // Time limit for user validity (inherited from license)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  lastLogin: timestamp("last_login"),
  loginAttempts: integer("login_attempts").notNull().default(0),
  lastLoginAttempt: timestamp("last_login_attempt")
}, (table) => {
  return {
    uniqueUsernamePerApp: index("unique_username_per_app").on(table.applicationId, table.username),
    uniqueEmailPerApp: index("unique_email_per_app").on(table.applicationId, table.email)
  };
});
var webhooks = pgTable("webhooks", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  secret: text("secret"),
  // For webhook signature verification
  events: text("events").array().notNull().default([]),
  // Array of event types to listen for
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var blacklist = pgTable("blacklist", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").references(() => applications.id, { onDelete: "cascade" }),
  userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  // 'ip', 'hwid', 'username', 'email'
  value: text("value").notNull(),
  // The actual value to blacklist
  reason: text("reason"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  createdBy: varchar("created_by").references(() => users.id)
}, (table) => {
  return {
    uniqueBlacklistEntry: index("unique_blacklist_entry").on(table.applicationId, table.type, table.value)
  };
});
var activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").references(() => applications.id, { onDelete: "cascade" }),
  appUserId: integer("app_user_id").references(() => appUsers.id, { onDelete: "cascade" }),
  event: text("event").notNull(),
  // 'login', 'register', 'login_failed', 'logout', etc.
  ipAddress: text("ip_address"),
  hwid: text("hwid"),
  userAgent: text("user_agent"),
  metadata: jsonb("metadata"),
  // Additional event data
  success: boolean("success").notNull().default(true),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").notNull().defaultNow()
}, (table) => {
  return {
    activityLogsByApp: index("activity_logs_by_app").on(table.applicationId, table.createdAt),
    activityLogsByUser: index("activity_logs_by_user").on(table.appUserId, table.createdAt)
  };
});
var activeSessions = pgTable("active_sessions", {
  id: serial("id").primaryKey(),
  applicationId: integer("application_id").notNull().references(() => applications.id, { onDelete: "cascade" }),
  appUserId: integer("app_user_id").notNull().references(() => appUsers.id, { onDelete: "cascade" }),
  sessionToken: text("session_token").notNull().unique(),
  ipAddress: text("ip_address"),
  hwid: text("hwid"),
  userAgent: text("user_agent"),
  location: text("location"),
  // Geolocation info
  isActive: boolean("is_active").notNull().default(true),
  lastActivity: timestamp("last_activity").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  expiresAt: timestamp("expires_at")
}, (table) => {
  return {
    activeSessionsByApp: index("active_sessions_by_app").on(table.applicationId, table.isActive),
    activeSessionsByUser: index("active_sessions_by_user").on(table.appUserId, table.isActive)
  };
});
var insertApplicationSchema = createInsertSchema(applications).pick({
  name: true,
  description: true,
  version: true,
  hwidLockEnabled: true,
  loginSuccessMessage: true,
  loginFailedMessage: true,
  accountDisabledMessage: true,
  accountExpiredMessage: true,
  versionMismatchMessage: true,
  hwidMismatchMessage: true
});
var insertLicenseKeySchema = createInsertSchema(licenseKeys).pick({
  licenseKey: true,
  maxUsers: true,
  validityDays: true,
  description: true
}).extend({
  maxUsers: z.number().min(1).default(1),
  validityDays: z.number().min(1),
  description: z.string().optional().nullable()
});
var insertAppUserSchema = createInsertSchema(appUsers).pick({
  username: true,
  password: true,
  expiresAt: true,
  hwid: true
}).extend({
  email: z.union([z.string().email(), z.literal(""), z.null(), z.undefined()]).optional().transform((val) => val === "" || val === void 0 ? null : val),
  expiresAt: z.string().optional().nullable(),
  hwid: z.string().optional().nullable(),
  licenseKey: z.string().optional()
  // Optional license key - required for external API, optional for admin creation
});
var updateApplicationSchema = createInsertSchema(applications).pick({
  name: true,
  description: true,
  version: true,
  isActive: true,
  hwidLockEnabled: true,
  loginSuccessMessage: true,
  loginFailedMessage: true,
  accountDisabledMessage: true,
  accountExpiredMessage: true,
  versionMismatchMessage: true,
  hwidMismatchMessage: true
}).partial();
var updateAppUserSchema = createInsertSchema(appUsers).pick({
  username: true,
  password: true,
  email: true,
  isActive: true,
  isPaused: true,
  hwid: true,
  expiresAt: true,
  lastLogin: true,
  loginAttempts: true,
  lastLoginAttempt: true
}).partial().extend({
  hwid: z.string().optional().nullable(),
  expiresAt: z.string().optional().nullable()
});
var loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  version: z.string().optional(),
  hwid: z.string().optional()
});
var insertWebhookSchema = createInsertSchema(webhooks).pick({
  url: true,
  secret: true,
  events: true
});
var insertBlacklistSchema = createInsertSchema(blacklist).pick({
  applicationId: true,
  type: true,
  value: true,
  reason: true
});
var insertActivityLogSchema = createInsertSchema(activityLogs).pick({
  applicationId: true,
  appUserId: true,
  event: true,
  ipAddress: true,
  hwid: true,
  userAgent: true,
  metadata: true,
  errorMessage: true
}).extend({
  success: z.boolean().optional()
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
if (typeof window === "undefined") {
  neonConfig.webSocketConstructor = ws;
}
var databaseUrl = "postgresql://neondb_owner:npg_ZNHf7uDlkF4S@ep-bitter-truth-a8glqli4-pooler.eastus2.azure.neon.tech/neondb?sslmode=require";
console.log("Connecting to database...");
var pool = new Pool({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false }
});
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, and } from "drizzle-orm";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
var DatabaseStorage = class {
  // User operations for Replit Auth
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async upsertUser(userData) {
    const insertData = {
      id: userData.id,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      profileImageUrl: userData.profileImageUrl,
      role: "user",
      permissions: [],
      isActive: true,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt
    };
    if (userData.email === "mohitsindhu121@gmail.com") {
      insertData.role = "owner";
      insertData.permissions = [
        "edit_code",
        "manage_users",
        "manage_applications",
        "view_all_data",
        "delete_applications",
        "manage_permissions",
        "access_admin_panel"
      ];
      insertData.isActive = true;
    }
    const [user] = await db.insert(users).values(insertData).onConflictDoUpdate({
      target: users.id,
      set: {
        email: insertData.email,
        firstName: insertData.firstName,
        lastName: insertData.lastName,
        profileImageUrl: insertData.profileImageUrl,
        role: insertData.role,
        permissions: insertData.permissions,
        isActive: insertData.isActive,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  async getAllUsers() {
    return await db.select().from(users);
  }
  async updateUser(id, updates) {
    const [user] = await db.update(users).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(users.id, id)).returning();
    return user;
  }
  async deleteUser(id) {
    const result = await db.delete(users).where(eq(users.id, id));
    return (result.rowCount || 0) > 0;
  }
  // Application methods
  async getApplication(id) {
    const [app2] = await db.select().from(applications).where(eq(applications.id, id));
    return app2;
  }
  async getApplicationByApiKey(apiKey) {
    const [app2] = await db.select().from(applications).where(eq(applications.apiKey, apiKey));
    return app2;
  }
  async createApplication(userId, insertApp) {
    const apiKey = `phantom_${nanoid(32)}`;
    const [app2] = await db.insert(applications).values({
      ...insertApp,
      userId,
      apiKey
    }).returning();
    return app2;
  }
  async updateApplication(id, updates) {
    const [app2] = await db.update(applications).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(applications.id, id)).returning();
    return app2;
  }
  async deleteApplication(id) {
    const result = await db.delete(applications).where(eq(applications.id, id));
    return (result.rowCount || 0) > 0;
  }
  async getAllApplications(userId) {
    return await db.select().from(applications).where(eq(applications.userId, userId));
  }
  // License Key methods
  async createLicenseKey(applicationId, license) {
    const expiresAt = /* @__PURE__ */ new Date();
    expiresAt.setDate(expiresAt.getDate() + license.validityDays);
    const [licenseKey] = await db.insert(licenseKeys).values({
      applicationId,
      licenseKey: license.licenseKey,
      maxUsers: license.maxUsers,
      validityDays: license.validityDays,
      description: license.description || null,
      expiresAt
    }).returning();
    return licenseKey;
  }
  async getLicenseKey(id) {
    const [license] = await db.select().from(licenseKeys).where(eq(licenseKeys.id, id));
    return license;
  }
  async getLicenseKeyByKey(licenseKey) {
    const [license] = await db.select().from(licenseKeys).where(eq(licenseKeys.licenseKey, licenseKey));
    return license;
  }
  async getAllLicenseKeys(applicationId) {
    return await db.select().from(licenseKeys).where(eq(licenseKeys.applicationId, applicationId));
  }
  async updateLicenseKey(id, updates) {
    const updateData = { ...updates, updatedAt: /* @__PURE__ */ new Date() };
    if (updates.validityDays) {
      const currentLicense = await this.getLicenseKey(id);
      if (currentLicense) {
        const createdAt = new Date(currentLicense.createdAt);
        const newExpiresAt = new Date(createdAt);
        newExpiresAt.setDate(newExpiresAt.getDate() + updates.validityDays);
        updateData.expiresAt = newExpiresAt;
      }
    }
    const [license] = await db.update(licenseKeys).set(updateData).where(eq(licenseKeys.id, id)).returning();
    return license;
  }
  async deleteLicenseKey(id) {
    const result = await db.delete(licenseKeys).where(eq(licenseKeys.id, id));
    return (result.rowCount || 0) > 0;
  }
  async validateLicenseKey(licenseKey, applicationId) {
    const [license] = await db.select().from(licenseKeys).where(
      and(
        eq(licenseKeys.licenseKey, licenseKey),
        eq(licenseKeys.applicationId, applicationId),
        eq(licenseKeys.isActive, true)
      )
    );
    if (!license) return null;
    if (/* @__PURE__ */ new Date() > new Date(license.expiresAt)) {
      return null;
    }
    if (license.currentUsers >= license.maxUsers) {
      return null;
    }
    return license;
  }
  async incrementLicenseUsage(licenseKeyId) {
    const [license] = await db.select().from(licenseKeys).where(eq(licenseKeys.id, licenseKeyId));
    if (!license) return false;
    const result = await db.update(licenseKeys).set({
      currentUsers: license.currentUsers + 1,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(licenseKeys.id, licenseKeyId));
    return (result.rowCount || 0) > 0;
  }
  async decrementLicenseUsage(licenseKeyId) {
    const [license] = await db.select().from(licenseKeys).where(eq(licenseKeys.id, licenseKeyId));
    if (!license) return false;
    const result = await db.update(licenseKeys).set({
      currentUsers: Math.max(0, license.currentUsers - 1),
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(licenseKeys.id, licenseKeyId));
    return (result.rowCount || 0) > 0;
  }
  // App User methods (updated with license support)
  async getAppUser(id) {
    const [user] = await db.select().from(appUsers).where(eq(appUsers.id, id));
    return user;
  }
  async getAppUserByUsername(applicationId, username) {
    const [user] = await db.select().from(appUsers).where(and(eq(appUsers.applicationId, applicationId), eq(appUsers.username, username)));
    return user;
  }
  async getAppUserByEmail(applicationId, email) {
    if (!email) return void 0;
    const [user] = await db.select().from(appUsers).where(and(eq(appUsers.applicationId, applicationId), eq(appUsers.email, email)));
    return user;
  }
  async createAppUserWithLicense(applicationId, insertUser) {
    const licenseKey = await this.validateLicenseKey(insertUser.licenseKey, applicationId);
    if (!licenseKey) {
      throw new Error("Invalid or expired license key");
    }
    const hashedPassword = await this.hashPassword(insertUser.password);
    const userExpiresAt = new Date(licenseKey.expiresAt);
    const [user] = await db.insert(appUsers).values({
      applicationId,
      licenseKeyId: licenseKey.id,
      username: insertUser.username,
      password: hashedPassword,
      email: insertUser.email || null,
      hwid: insertUser.hwid || null,
      expiresAt: userExpiresAt
    }).returning();
    await this.incrementLicenseUsage(licenseKey.id);
    return user;
  }
  // Create app user without license key (for admin creation)
  async createAppUser(applicationId, insertUser) {
    const hashedPassword = await this.hashPassword(insertUser.password);
    let userExpiresAt = null;
    if (insertUser.expiresAt) {
      userExpiresAt = new Date(insertUser.expiresAt);
    }
    const [user] = await db.insert(appUsers).values({
      applicationId,
      licenseKeyId: null,
      // No license key for admin creation
      username: insertUser.username,
      password: hashedPassword,
      email: insertUser.email || null,
      hwid: insertUser.hwid || null,
      expiresAt: userExpiresAt
    }).returning();
    return user;
  }
  async updateAppUser(id, updates) {
    if (updates.password) {
      updates.password = await this.hashPassword(updates.password);
    }
    const processedUpdates = { ...updates };
    if (processedUpdates.expiresAt && typeof processedUpdates.expiresAt === "string") {
      processedUpdates.expiresAt = new Date(processedUpdates.expiresAt);
    }
    const [user] = await db.update(appUsers).set(processedUpdates).where(eq(appUsers.id, id)).returning();
    return user;
  }
  async pauseAppUser(id) {
    const result = await db.update(appUsers).set({ isPaused: true }).where(eq(appUsers.id, id));
    return (result.rowCount || 0) > 0;
  }
  async unpauseAppUser(id) {
    const result = await db.update(appUsers).set({ isPaused: false }).where(eq(appUsers.id, id));
    return (result.rowCount || 0) > 0;
  }
  async deleteAppUser(id) {
    const result = await db.delete(appUsers).where(eq(appUsers.id, id));
    return (result.rowCount || 0) > 0;
  }
  async resetAppUserHwid(id) {
    const result = await db.update(appUsers).set({ hwid: null }).where(eq(appUsers.id, id));
    return (result.rowCount || 0) > 0;
  }
  async setAppUserHwid(id, hwid) {
    const result = await db.update(appUsers).set({ hwid }).where(eq(appUsers.id, id));
    return (result.rowCount || 0) > 0;
  }
  async getAllAppUsers(applicationId) {
    return await db.select().from(appUsers).where(eq(appUsers.applicationId, applicationId));
  }
  // Webhook methods
  async createWebhook(userId, webhook) {
    const [newWebhook] = await db.insert(webhooks).values({ ...webhook, userId }).returning();
    return newWebhook;
  }
  async getUserWebhooks(userId) {
    return await db.select().from(webhooks).where(eq(webhooks.userId, userId));
  }
  async updateWebhook(id, updates) {
    const [webhook] = await db.update(webhooks).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(webhooks.id, id)).returning();
    return webhook;
  }
  async deleteWebhook(id) {
    const result = await db.delete(webhooks).where(eq(webhooks.id, id));
    return (result.rowCount || 0) > 0;
  }
  // Blacklist methods
  async createBlacklistEntry(entry) {
    const [newEntry] = await db.insert(blacklist).values(entry).returning();
    return newEntry;
  }
  async getBlacklistEntries(applicationId) {
    if (applicationId) {
      return await db.select().from(blacklist).where(eq(blacklist.applicationId, applicationId));
    }
    return await db.select().from(blacklist);
  }
  async checkBlacklist(applicationId, type, value) {
    const [entry] = await db.select().from(blacklist).where(
      and(
        eq(blacklist.applicationId, applicationId),
        eq(blacklist.type, type),
        eq(blacklist.value, value),
        eq(blacklist.isActive, true)
      )
    );
    return entry;
  }
  async deleteBlacklistEntry(id) {
    const result = await db.delete(blacklist).where(eq(blacklist.id, id));
    return (result.rowCount || 0) > 0;
  }
  // Activity logging methods
  async createActivityLog(log2) {
    const [newLog] = await db.insert(activityLogs).values(log2).returning();
    return newLog;
  }
  async getActivityLogs(applicationId, limit = 100) {
    return await db.select().from(activityLogs).where(eq(activityLogs.applicationId, applicationId)).orderBy(activityLogs.createdAt).limit(limit);
  }
  async getUserActivityLogs(appUserId, limit = 100) {
    return await db.select().from(activityLogs).where(eq(activityLogs.appUserId, appUserId)).orderBy(activityLogs.createdAt).limit(limit);
  }
  // Session tracking methods
  async createActiveSession(session2) {
    const [newSession] = await db.insert(activeSessions).values(session2).returning();
    return newSession;
  }
  async getActiveSessions(applicationId) {
    return await db.select().from(activeSessions).where(
      and(
        eq(activeSessions.applicationId, applicationId),
        eq(activeSessions.isActive, true)
      )
    );
  }
  async updateSessionActivity(sessionToken) {
    const result = await db.update(activeSessions).set({ lastActivity: /* @__PURE__ */ new Date() }).where(eq(activeSessions.sessionToken, sessionToken));
    return (result.rowCount || 0) > 0;
  }
  async endSession(sessionToken) {
    const result = await db.update(activeSessions).set({ isActive: false }).where(eq(activeSessions.sessionToken, sessionToken));
    return (result.rowCount || 0) > 0;
  }
  // Auth methods
  async validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
  async hashPassword(password) {
    return await bcrypt.hash(password, 12);
  }
};
var storage = new DatabaseStorage();

// server/replitAuth.ts
import * as client from "openid-client";
import { Strategy } from "openid-client/passport";
import passport from "passport";
import session from "express-session";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
import admin from "firebase-admin";
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID
    });
  } catch (error) {
    console.error("Failed to initialize Firebase Admin:", error);
  }
}
var isReplitEnvironment = !!process.env.REPLIT_DOMAINS;
var getOidcConfig = memoize(
  async () => {
    if (!isReplitEnvironment) {
      throw new Error("OIDC config not available outside Replit environment");
    }
    return await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID
    );
  },
  { maxAge: 3600 * 1e3 }
);
function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1e3;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions"
  });
  const sessionSecret = process.env.SESSION_SECRET || "fallback-secret-key-change-in-production";
  return session({
    secret: sessionSecret,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionTtl
    }
  });
}
function updateUserSession(user, tokens) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}
async function upsertUser(claims) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"]
  });
}
async function setupAuth(app2) {
  app2.set("trust proxy", 1);
  app2.use(getSession());
  app2.use(passport.initialize());
  app2.use(passport.session());
  if (isReplitEnvironment) {
    const config = await getOidcConfig();
    const verify = async (tokens, verified) => {
      const user = {};
      updateUserSession(user, tokens);
      await upsertUser(tokens.claims());
      verified(null, user);
    };
    for (const domain of process.env.REPLIT_DOMAINS.split(",")) {
      const strategy = new Strategy(
        {
          name: `replitauth:${domain}`,
          config,
          scope: "openid email profile offline_access",
          callbackURL: `https://${domain}/api/callback`
        },
        verify
      );
      passport.use(strategy);
    }
  }
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((user, cb) => cb(null, user));
  app2.get("/api/login", (req, res, next) => {
    if (!isReplitEnvironment) {
      return res.status(404).json({ message: "Replit authentication not available" });
    }
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"]
    })(req, res, next);
  });
  app2.get("/api/callback", (req, res, next) => {
    if (!isReplitEnvironment) {
      return res.status(404).json({ message: "Replit authentication not available" });
    }
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login"
    })(req, res, next);
  });
  app2.get("/api/logout", async (req, res) => {
    if (!isReplitEnvironment) {
      req.logout(() => {
        res.redirect("/");
      });
      return;
    }
    const config = await getOidcConfig();
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`
        }).href
      );
    });
  });
}
var isAuthenticated = async (req, res, next) => {
  console.log(`Auth check for ${req.method} ${req.path} - req.user:`, req.user);
  console.log(`Auth check - session:`, req.session);
  if (req.path === "/api/logout") {
    return next();
  }
  if (req.session && req.session.user && req.session.user.claims) {
    if (req.session.id && (!req.session.cookie.expires || req.session.cookie.expires > /* @__PURE__ */ new Date())) {
      req.user = req.session.user;
      console.log("Auth successful from session");
      return next();
    } else {
      console.log("Session expired, clearing...");
      delete req.session.user;
    }
  }
  const accountId = req.headers["x-account-id"];
  if (accountId && !req.user) {
    try {
      const user2 = await storage.getUser(accountId);
      if (user2) {
        req.user = {
          claims: {
            sub: user2.id,
            email: user2.email
          }
        };
        if (!req.session) {
          req.session = {};
        }
        if (!req.session.destroying) {
          req.session.user = req.user;
        }
        return next();
      }
    } catch (error) {
      console.error("Error verifying account ID:", error);
    }
  }
  if (!isReplitEnvironment) {
    if (req.session && (req.session.user || accountId)) {
      return next();
    }
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = req.user;
  if (!req.isAuthenticated() || !user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (!user.expires_at) {
    return next();
  }
  const now = Math.floor(Date.now() / 1e3);
  if (now <= user.expires_at) {
    return next();
  }
  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};

// server/permissions.ts
var PERMISSIONS = {
  EDIT_CODE: "edit_code",
  MANAGE_USERS: "manage_users",
  MANAGE_APPLICATIONS: "manage_applications",
  VIEW_ALL_DATA: "view_all_data",
  DELETE_APPLICATIONS: "delete_applications",
  MANAGE_PERMISSIONS: "manage_permissions",
  ACCESS_ADMIN_PANEL: "access_admin_panel"
};
var ROLES = {
  OWNER: "owner",
  ADMIN: "admin",
  MODERATOR: "moderator",
  USER: "user"
};
function hasPermission(user, permission) {
  if (!user.isActive) return false;
  if (user.role === ROLES.OWNER) return true;
  return user.permissions.includes(permission);
}
function hasRole(user, role) {
  if (!user.isActive) return false;
  const hierarchy = [ROLES.USER, ROLES.MODERATOR, ROLES.ADMIN, ROLES.OWNER];
  const userRoleIndex = hierarchy.indexOf(user.role);
  const requiredRoleIndex = hierarchy.indexOf(role);
  return userRoleIndex >= requiredRoleIndex;
}
function requirePermission(permission) {
  return async (req, res, next) => {
    try {
      if (!req.user?.claims?.sub) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(req.user.claims.sub);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      if (!hasPermission(user, permission)) {
        return res.status(403).json({
          message: "Insufficient permissions",
          required: permission,
          userRole: user.role
        });
      }
      req.permissionUser = user;
      next();
    } catch (error) {
      console.error("Permission check error:", error);
      res.status(500).json({ message: "Permission check failed" });
    }
  };
}
function requireRole(role) {
  return async (req, res, next) => {
    try {
      if (!req.user?.claims?.sub) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(req.user.claims.sub);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      if (!hasRole(user, role)) {
        return res.status(403).json({
          message: "Insufficient role",
          required: role,
          userRole: user.role
        });
      }
      req.permissionUser = user;
      next();
    } catch (error) {
      console.error("Role check error:", error);
      res.status(500).json({ message: "Role check failed" });
    }
  };
}
async function getUserPermissions(userId) {
  try {
    const user = await storage.getUser(userId);
    if (!user) return null;
    return {
      id: user.id,
      email: user.email || void 0,
      role: user.role || ROLES.USER,
      permissions: user.permissions || [],
      isActive: user.isActive ?? true
    };
  } catch (error) {
    console.error("Get user permissions error:", error);
    return null;
  }
}

// server/webhookService.ts
import crypto from "crypto";
var WebhookService = class _WebhookService {
  static instance;
  static getInstance() {
    if (!_WebhookService.instance) {
      _WebhookService.instance = new _WebhookService();
    }
    return _WebhookService.instance;
  }
  generateSignature(payload, secret) {
    return crypto.createHmac("sha256", secret).update(payload).digest("hex");
  }
  formatDiscordWebhook(payload) {
    const color = payload.success ? 65280 : 16711680;
    const eventEmoji = {
      "user_login": "\u{1F510}",
      "login_failed": "\u274C",
      "user_register": "\u{1F464}",
      "account_expired": "\u23F0",
      "hwid_mismatch": "\u{1F512}",
      "version_mismatch": "\u{1F504}",
      "account_disabled": "\u{1F6AB}",
      "login_blocked_ip": "\u{1F6AB}",
      "login_blocked_username": "\u{1F6AB}",
      "login_blocked_hwid": "\u{1F6AB}"
    };
    const fields = [];
    const embed = {
      title: `${eventEmoji[payload.event] || "\u{1F4CA}"} ${payload.event.replace("_", " ").toUpperCase()}`,
      color,
      timestamp: payload.timestamp,
      fields,
      footer: {
        text: `Application ID: ${payload.application_id}`
      }
    };
    if (payload.user_data) {
      fields.push({
        name: "User Information",
        value: `**Username:** ${payload.user_data.username}
${payload.user_data.email ? `**Email:** ${payload.user_data.email}
` : ""}${payload.user_data.ip_address ? `**IP:** ${payload.user_data.ip_address}
` : ""}${payload.user_data.hwid ? `**HWID:** ${payload.user_data.hwid}
` : ""}`,
        inline: true
      });
    }
    if (payload.error_message) {
      fields.push({
        name: "Error Details",
        value: payload.error_message,
        inline: false
      });
    }
    if (payload.metadata) {
      fields.push({
        name: "Additional Information",
        value: Object.entries(payload.metadata).map(([key, value]) => `**${key}:** ${value}`).join("\n"),
        inline: false
      });
    }
    return {
      embeds: [embed]
    };
  }
  async sendWebhook(webhook, payload, retryCount = 0) {
    const maxRetries = 5;
    const baseRetryDelay = 2e3;
    const retryDelay = Math.min(baseRetryDelay * Math.pow(2, retryCount), 3e4);
    try {
      const isDiscordWebhook = webhook.url.includes("discord.com/api/webhooks");
      let webhookPayload;
      if (isDiscordWebhook) {
        webhookPayload = this.formatDiscordWebhook(payload);
      } else {
        webhookPayload = payload;
      }
      const payloadString = JSON.stringify(webhookPayload);
      const signature = webhook.secret ? this.generateSignature(payloadString, webhook.secret) : void 0;
      const headers = {
        "Content-Type": "application/json",
        "User-Agent": "PhantomAuth-Webhook/1.0 (Vietnam-Optimized)",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "X-Forwarded-For": process.env.REPLIT_DEPLOYMENT_REGION || "unknown",
        "X-Server-Region": "Vietnam-Optimized"
      };
      if (!isDiscordWebhook) {
        headers["X-Webhook-Timestamp"] = payload.timestamp;
        headers["X-Webhook-Event"] = payload.event;
        headers["X-Webhook-Retry-Count"] = retryCount.toString();
        headers["X-Webhook-Server-Time"] = (/* @__PURE__ */ new Date()).toISOString();
        if (signature) {
          headers["X-Webhook-Signature"] = `sha256=${signature}`;
        }
      }
      const timeout = 45e3 + retryCount * 5e3;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      console.log(`\u{1F310} Sending webhook to: ${webhook.url} (attempt ${retryCount + 1}/${maxRetries + 1}) - Timeout: ${timeout}ms`);
      console.log(`\u{1F4CD} Server region: ${process.env.REPLIT_DEPLOYMENT_REGION || "unknown"}`);
      const startTime = Date.now();
      const response = await fetch(webhook.url, {
        method: "POST",
        headers,
        body: payloadString,
        signal: controller.signal,
        // Vietnam server optimized settings
        keepalive: true,
        redirect: "follow",
        cache: "no-cache",
        mode: "cors",
        referrerPolicy: "no-referrer",
        // Additional performance optimizations
        priority: "high",
        duplex: "half"
      });
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      const serverRegion = response.headers.get("cf-ray") || response.headers.get("server") || "unknown";
      console.log(`\u2705 Webhook response: ${response.status} | Time: ${responseTime}ms | Server: ${serverRegion}`);
      if (!response.ok) {
        let errorText = "";
        let isJsonResponse = false;
        try {
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            isJsonResponse = true;
            const jsonError = await response.json();
            errorText = JSON.stringify(jsonError);
          } else {
            errorText = await response.text();
            if (errorText.includes("<!DOCTYPE") || errorText.includes("<html>")) {
              errorText = `Webhook endpoint returned HTML page instead of JSON. Status: ${response.status}. This usually means the URL is incorrect or the endpoint doesn't accept POST requests.`;
            }
          }
        } catch (e) {
          errorText = `Unable to read response. Content-Type: ${response.headers.get("content-type") || "unknown"}`;
        }
        console.error(`\u274C Webhook error (${response.status}):`, errorText);
        console.error(`\u{1F50D} Details: URL=${webhook.url}, Event=${payload.event}, User=${payload.user_data?.id || "unknown"}`);
        console.error(`\u{1F4C4} Response type: ${isJsonResponse ? "JSON" : "Non-JSON"}`);
        const shouldRetry = retryCount < maxRetries && (response.status >= 500 || // Server errors
        response.status === 429 || // Rate limiting
        response.status === 0 || // Network errors
        response.status === 408 || // Request timeout
        response.status === 502 || // Bad gateway
        response.status === 503 || // Service unavailable
        response.status === 504);
        if (shouldRetry) {
          const jitter = Math.random() * 3e3;
          const adjustedDelay = retryDelay + jitter;
          console.log(`\u{1F504} Retrying webhook in ${Math.round(adjustedDelay)}ms... (Status: ${response.status})`);
          await new Promise((resolve) => setTimeout(resolve, adjustedDelay));
          return this.sendWebhook(webhook, payload, retryCount + 1);
        }
      } else {
        console.log(`\u{1F389} Webhook delivered successfully in ${responseTime}ms to ${serverRegion}`);
      }
      return response.ok;
    } catch (error) {
      const errorName = error instanceof Error ? error.name : "Unknown";
      const errorMessage = error instanceof Error ? error.message : String(error);
      const duration = Date.now() - (Date.now() - 1e3);
      console.error(`\u{1F4A5} Webhook delivery failed (${errorName}):`, errorMessage);
      console.error(`\u{1F50D} Details: URL=${webhook.url}, Event=${payload.event}, Attempt=${retryCount + 1}/${maxRetries + 1}`);
      const isRetryableError = error instanceof Error && (error.name === "AbortError" || error.name === "TypeError" || error.name === "TimeoutError" || error.name === "NetworkError" || error.message.includes("fetch") || error.message.includes("network") || error.message.includes("timeout") || error.message.includes("ENOTFOUND") || error.message.includes("ECONNRESET") || error.message.includes("ETIMEDOUT") || error.message.includes("ECONNREFUSED") || error.message.includes("EHOSTUNREACH") || error.message.includes("socket hang up") || error.message.includes("getaddrinfo") || error.message.includes("DNS"));
      if (retryCount < maxRetries && isRetryableError) {
        const jitter = Math.random() * 5e3;
        const adjustedDelay = retryDelay + jitter;
        console.log(`\u{1F504} Retrying webhook in ${Math.round(adjustedDelay)}ms due to ${errorName}: ${errorMessage}`);
        await new Promise((resolve) => setTimeout(resolve, adjustedDelay));
        return this.sendWebhook(webhook, payload, retryCount + 1);
      }
      console.error(`\u274C Final webhook delivery failure after ${retryCount + 1} attempts`);
      return false;
    }
  }
  async deliverWebhooks(userId, event, payload) {
    try {
      const webhooks2 = await storage.getUserWebhooks(userId);
      console.log(`Attempting to deliver webhook for event: ${event}`);
      console.log(`Found ${webhooks2.length} webhooks for user ${userId}`);
      console.log(`Request origin: IP=${payload.user_data?.ip_address || "unknown"}, Location=${payload.user_data?.location || "unknown"}`);
      const activeWebhooks = webhooks2.filter(
        (w) => w.isActive && w.events.includes(event)
      );
      console.log(`Active webhooks for event ${event}:`, activeWebhooks.length);
      activeWebhooks.forEach((w) => {
        console.log(`Webhook ${w.id} events:`, w.events);
      });
      const deliveryResults = [];
      for (const webhook of activeWebhooks) {
        console.log(`Delivering webhook ${webhook.id} to: ${webhook.url}`);
        const startTime = Date.now();
        try {
          const success = await this.sendWebhook(webhook, payload);
          const duration = Date.now() - startTime;
          deliveryResults.push({
            webhookId: webhook.id,
            url: webhook.url,
            success,
            duration,
            error: null
          });
          console.log(`Webhook ${webhook.id} delivery ${success ? "succeeded" : "failed"} in ${duration}ms`);
        } catch (error) {
          const duration = Date.now() - startTime;
          const errorMessage = error instanceof Error ? error.message : String(error);
          deliveryResults.push({
            webhookId: webhook.id,
            url: webhook.url,
            success: false,
            duration,
            error: errorMessage
          });
          console.error(`Webhook ${webhook.id} delivery failed after ${duration}ms:`, errorMessage);
        }
        if (activeWebhooks.length > 1) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      const successCount = deliveryResults.filter((r) => r.success).length;
      const failureCount = deliveryResults.length - successCount;
      console.log(`Webhook delivery summary: ${successCount} succeeded, ${failureCount} failed out of ${deliveryResults.length} total`);
      if (failureCount > 0) {
        console.log("Failed deliveries:", deliveryResults.filter((r) => !r.success));
      }
    } catch (error) {
      console.error("Failed to deliver webhooks:", error);
    }
  }
  async logActivity(activityData) {
    try {
      const logData = {
        ...activityData,
        success: activityData.success ?? true
      };
      if (activityData.appUserId && activityData.appUserId > 0) {
        try {
          const userExists = await storage.getAppUser(activityData.appUserId);
          if (!userExists) {
            delete logData.appUserId;
          }
        } catch {
          delete logData.appUserId;
        }
      } else {
        delete logData.appUserId;
      }
      await storage.createActivityLog(logData);
    } catch (error) {
      console.error("Failed to log activity:", error);
    }
  }
  async logAndNotify(userId, applicationId, event, userData, options = {}) {
    await this.logActivity({
      applicationId,
      appUserId: userData?.id,
      event,
      ipAddress: options.ipAddress,
      hwid: options.hwid,
      userAgent: options.userAgent,
      metadata: options.metadata,
      success: options.success ?? true,
      errorMessage: options.errorMessage
    });
    const webhookPayload = {
      event,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      application_id: applicationId,
      success: options.success ?? true,
      error_message: options.errorMessage,
      metadata: options.metadata
    };
    if (userData) {
      webhookPayload.user_data = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        hwid: userData.hwid || options.hwid,
        ip_address: options.ipAddress,
        user_agent: options.userAgent
      };
    }
    await this.deliverWebhooks(userId, event, webhookPayload);
  }
};
var webhookService = WebhookService.getInstance();

// server/routes.ts
import { z as z2 } from "zod";
async function validateApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"] || req.query.api_key;
  if (!apiKey) {
    return res.status(401).json({ success: false, message: "API key required" });
  }
  try {
    const application = await storage.getApplicationByApiKey(apiKey);
    if (!application || !application.isActive) {
      return res.status(401).json({ success: false, message: "Invalid or inactive API key" });
    }
    req.application = application;
    next();
  } catch (error) {
    console.error("API key validation error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
async function registerRoutes(app2) {
  await setupAuth(app2);
  app2.get("/api/debug/auth", async (req, res) => {
    try {
      console.log("Debug auth - Headers:", req.headers);
      console.log("Debug auth - Session:", req.session);
      console.log("Debug auth - User:", req.user);
      const accountId = req.headers["x-account-id"];
      if (accountId) {
        const user = await storage.getUser(accountId);
        console.log("Debug auth - Found user by account ID:", user);
        return res.json({
          status: "authenticated",
          method: "account-id-header",
          accountId,
          user
        });
      }
      if (req.session && req.session.user) {
        return res.json({
          status: "authenticated",
          method: "session",
          user: req.session.user
        });
      }
      res.json({
        status: "not-authenticated",
        session: req.session,
        headers: req.headers
      });
    } catch (error) {
      console.error("Debug auth error:", error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/auth/user", isAuthenticated, async (req, res) => {
    try {
      console.log("Auth check - req.user:", req.user);
      console.log("Auth check - session:", req.session);
      const userId = req.user.claims.sub;
      console.log("Fetching user for ID:", userId);
      const user = await storage.getUser(userId);
      console.log("Found user:", user);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const permissions = await getUserPermissions(userId);
      console.log("User permissions:", permissions);
      res.json({ ...user, userPermissions: permissions });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.post("/api/auth/firebase-login", async (req, res) => {
    try {
      const { firebase_uid, email, display_name } = req.body;
      if (!firebase_uid || !email) {
        return res.status(400).json({
          success: false,
          message: "Firebase UID and email are required"
        });
      }
      console.log("Firebase login attempt:", { firebase_uid, email, display_name });
      const userData = {
        id: firebase_uid,
        email,
        firstName: display_name?.split(" ")[0] || "",
        lastName: display_name?.split(" ").slice(1).join(" ") || "",
        profileImageUrl: null
      };
      const user = await storage.upsertUser(userData);
      console.log("User upserted:", user);
      req.session.user = {
        claims: {
          sub: firebase_uid,
          email
        }
      };
      await new Promise((resolve, reject) => {
        req.session.save((err) => {
          if (err) reject(err);
          else resolve(true);
        });
      });
      console.log("Session created and saved successfully");
      res.json({
        success: true,
        message: "Login successful! Redirecting to dashboard...",
        account_id: firebase_uid,
        user
      });
    } catch (error) {
      console.error("Firebase login error:", error);
      res.status(500).json({
        success: false,
        message: "Authentication failed: " + (error instanceof Error ? error.message : "Unknown error")
      });
    }
  });
  const handleLogout = async (req, res) => {
    try {
      console.log(`${req.method} /api/logout - Session before destroy:`, req.session);
      if (req.session) {
        req.session.user = null;
        req.session.destroy((err) => {
          if (err) {
            console.error("Error destroying session:", err);
          } else {
            console.log("Session destroyed successfully");
          }
        });
      }
      const cookieOptions = [
        { path: "/" },
        { path: "/", domain: ".replit.app" },
        { path: "/", domain: ".replit.dev" },
        { path: "/", domain: ".replit.co" },
        { path: "/", secure: false, httpOnly: true },
        { path: "/", secure: true, httpOnly: true }
      ];
      cookieOptions.forEach((options) => {
        res.clearCookie("connect.sid", options);
        res.clearCookie("session", options);
        res.clearCookie(".AuthSession", options);
      });
      res.set({
        "Cache-Control": "no-store, no-cache, must-revalidate, private, max-age=0",
        "Expires": "Thu, 01 Jan 1970 00:00:00 GMT",
        "Pragma": "no-cache",
        "Clear-Site-Data": '"cache", "cookies", "storage", "executionContexts"'
      });
      if (req.method === "GET") {
        console.log("GET logout - Redirecting to Firebase login");
        return res.redirect("/firebase-login?logged_out=true");
      }
      res.json({
        success: true,
        message: "Logged out successfully",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error in logout:", error);
      if (req.method === "GET") {
        return res.redirect("/?logout_error=true");
      }
      res.status(500).json({ success: false, message: "Failed to logout" });
    }
  };
  app2.post("/api/logout", handleLogout);
  app2.get("/api/logout", handleLogout);
  app2.get("/api/dashboard/stats", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications2 = await storage.getAllApplications(userId);
      let totalUsers = 0;
      let totalActiveSessions = 0;
      let totalApiRequests = 0;
      for (const app3 of applications2) {
        const users2 = await storage.getAllAppUsers(app3.id);
        const activeSessions2 = await storage.getActiveSessions(app3.id);
        const recentActivity = await storage.getActivityLogs(app3.id, 1e3);
        totalUsers += users2.length;
        totalActiveSessions += activeSessions2.length;
        totalApiRequests += recentActivity.length;
      }
      res.json({
        totalApplications: applications2.length,
        totalUsers,
        activeApplications: applications2.filter((app3) => app3.isActive).length,
        totalActiveSessions,
        totalApiRequests,
        accountType: "Premium"
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
  });
  app2.get("/api/applications", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications2 = await storage.getAllApplications(userId);
      res.json(applications2);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });
  app2.post("/api/applications", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(userId, validatedData);
      res.status(201).json(application);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error creating application:", error);
      res.status(500).json({ message: "Failed to create application" });
    }
  });
  app2.get("/api/applications/:id", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error fetching application:", error);
      res.status(500).json({ message: "Failed to fetch application" });
    }
  });
  app2.put("/api/applications/:id", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const validatedData = updateApplicationSchema.parse(req.body);
      const updatedApplication = await storage.updateApplication(applicationId, validatedData);
      if (!updatedApplication) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(updatedApplication);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error updating application:", error);
      res.status(500).json({ message: "Failed to update application" });
    }
  });
  app2.patch("/api/applications/:id", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const validatedData = updateApplicationSchema.parse(req.body);
      const updatedApplication = await storage.updateApplication(applicationId, validatedData);
      if (!updatedApplication) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(updatedApplication);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error updating application:", error);
      res.status(500).json({ message: "Failed to update application" });
    }
  });
  app2.delete("/api/applications/:id", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const deleted = await storage.deleteApplication(applicationId);
      if (!deleted) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json({ message: "Application deleted successfully" });
    } catch (error) {
      console.error("Error deleting application:", error);
      res.status(500).json({ message: "Failed to delete application" });
    }
  });
  app2.get("/api/applications/:id/stats", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const users2 = await storage.getAllAppUsers(applicationId);
      const activeSessions2 = await storage.getActiveSessions(applicationId);
      const recentActivity = await storage.getActivityLogs(applicationId, 100);
      const activeUsers = users2.filter((u) => u.isActive && !u.isPaused).length;
      const totalUsers = users2.length;
      const registeredUsers = users2.filter((u) => u.isActive && !u.isPaused).length;
      const loginAttempts = recentActivity.filter((log2) => log2.event.includes("login"));
      const successfulLogins = loginAttempts.filter((log2) => log2.success);
      const loginSuccessRate = loginAttempts.length > 0 ? Math.round(successfulLogins.length / loginAttempts.length * 100) : 100;
      const lastActivity = recentActivity.length > 0 ? recentActivity[recentActivity.length - 1].createdAt : null;
      res.json({
        totalUsers,
        activeUsers,
        registeredUsers,
        activeSessions: activeSessions2.length,
        loginSuccessRate,
        totalApiRequests: recentActivity.length,
        lastActivity,
        applicationStatus: application.isActive ? "online" : "offline",
        hwidLockEnabled: application.hwidLockEnabled
      });
    } catch (error) {
      console.error("Error fetching application stats:", error);
      res.status(500).json({ message: "Failed to fetch application stats" });
    }
  });
  app2.get("/api/applications/:id/sessions", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const activeSessions2 = await storage.getActiveSessions(applicationId);
      res.json(activeSessions2);
    } catch (error) {
      console.error("Error fetching active sessions:", error);
      res.status(500).json({ message: "Failed to fetch active sessions" });
    }
  });
  app2.get("/api/applications/:id/licenses", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const licenses = await storage.getAllLicenseKeys(applicationId);
      res.json(licenses);
    } catch (error) {
      console.error("Error fetching license keys:", error);
      res.status(500).json({ message: "Failed to fetch license keys" });
    }
  });
  app2.post("/api/applications/:id/licenses", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const validatedData = insertLicenseKeySchema.parse(req.body);
      const license = await storage.createLicenseKey(applicationId, validatedData);
      res.status(201).json(license);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error creating license key:", error);
      res.status(500).json({ message: "Failed to create license key" });
    }
  });
  app2.get("/api/applications/:id/licenses/generate", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const { nanoid: nanoid3 } = await import("nanoid");
      const appPrefix = application.name.toUpperCase().replace(/[^A-Z0-9]/g, "").substring(0, 4);
      const licenseKey = `${appPrefix}-${nanoid3(8)}-${nanoid3(8)}-${nanoid3(8)}`;
      res.json({
        generatedKey: licenseKey,
        defaultMaxUsers: 1,
        defaultValidityDays: 30
      });
    } catch (error) {
      console.error("Error generating license key:", error);
      res.status(500).json({ message: "Failed to generate license key" });
    }
  });
  app2.post("/api/applications/:id/licenses/generate", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const { maxUsers = 1, validityDays, description } = req.body;
      if (!validityDays || validityDays < 1) {
        return res.status(400).json({ message: "validityDays is required and must be greater than 0" });
      }
      const { nanoid: nanoid3 } = await import("nanoid");
      const appPrefix = application.name.toUpperCase().replace(/[^A-Z0-9]/g, "").substring(0, 4);
      const licenseKey = `${appPrefix}-${nanoid3(8)}-${nanoid3(8)}-${nanoid3(8)}`;
      const license = await storage.createLicenseKey(applicationId, {
        licenseKey,
        maxUsers,
        validityDays,
        description
      });
      res.status(201).json(license);
    } catch (error) {
      console.error("Error generating license key:", error);
      res.status(500).json({ message: "Failed to generate license key" });
    }
  });
  app2.delete("/api/applications/:id/licenses/:licenseId", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const licenseId = parseInt(req.params.licenseId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const license = await storage.getLicenseKey(licenseId);
      if (!license || license.applicationId !== applicationId) {
        return res.status(404).json({ message: "License key not found" });
      }
      const deleted = await storage.deleteLicenseKey(licenseId);
      if (!deleted) {
        return res.status(404).json({ message: "License key not found" });
      }
      res.json({ message: "License key deleted successfully" });
    } catch (error) {
      console.error("Error deleting license key:", error);
      res.status(500).json({ message: "Failed to delete license key" });
    }
  });
  app2.get("/api/applications/:id/users", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      console.log(`Fetching users for application ${applicationId}`);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        console.log(`Application ${applicationId} not found`);
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        console.log(`Access denied for user ${userId} to application ${applicationId}`);
        return res.status(403).json({ message: "Access denied" });
      }
      const users2 = await storage.getAllAppUsers(applicationId);
      console.log(`Found ${users2.length} users for application ${applicationId}:`, users2);
      res.json(users2);
    } catch (error) {
      console.error("Error fetching application users:", error);
      res.status(500).json({ message: "Failed to fetch application users" });
    }
  });
  app2.post("/api/applications/:id/users", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const userId = req.user.claims.sub;
      if (application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const validatedData = insertAppUserSchema.parse(req.body);
      const processedData = { ...validatedData };
      if (processedData.expiresAt && typeof processedData.expiresAt === "string") {
        processedData.expiresAt = new Date(processedData.expiresAt);
      }
      if (processedData.email === "" || processedData.email === void 0) {
        processedData.email = null;
      }
      if (processedData.licenseKey && processedData.licenseKey.trim()) {
        const license = await storage.validateLicenseKey(processedData.licenseKey, applicationId);
        if (!license) {
          return res.status(400).json({ message: "Invalid or expired license key" });
        }
        if (license.currentUsers >= license.maxUsers) {
          return res.status(400).json({ message: "License key has reached maximum user limit" });
        }
      }
      const existingUser = await storage.getAppUserByUsername(applicationId, validatedData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists in this application" });
      }
      if (processedData.email) {
        const existingEmail = await storage.getAppUserByEmail(applicationId, processedData.email);
        if (existingEmail) {
          return res.status(400).json({ message: "Email already exists in this application" });
        }
      }
      const user = processedData.licenseKey && processedData.licenseKey.trim() ? await storage.createAppUserWithLicense(applicationId, processedData) : await storage.createAppUser(applicationId, processedData);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error creating app user:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  });
  app2.put("/api/applications/:id/users/:userId", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const userId = parseInt(req.params.userId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const ownerId = req.user.claims.sub;
      if (application.userId !== ownerId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const user = await storage.getAppUser(userId);
      if (!user || user.applicationId !== applicationId) {
        return res.status(404).json({ message: "User not found" });
      }
      const validatedData = updateAppUserSchema.parse(req.body);
      const updatedUser = await storage.updateAppUser(userId, validatedData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const { password, ...userWithoutPassword } = updatedUser;
      res.json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error updating app user:", error);
      res.status(500).json({ message: "Failed to update user" });
    }
  });
  app2.post("/api/applications/:id/users/:userId/pause", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const userId = parseInt(req.params.userId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const ownerId = req.user.claims.sub;
      if (application.userId !== ownerId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const user = await storage.getAppUser(userId);
      if (!user || user.applicationId !== applicationId) {
        return res.status(404).json({ message: "User not found" });
      }
      const paused = await storage.pauseAppUser(userId);
      if (!paused) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User paused successfully" });
    } catch (error) {
      console.error("Error pausing app user:", error);
      res.status(500).json({ message: "Failed to pause user" });
    }
  });
  app2.post("/api/applications/:id/users/:userId/unpause", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const userId = parseInt(req.params.userId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const ownerId = req.user.claims.sub;
      if (application.userId !== ownerId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const user = await storage.getAppUser(userId);
      if (!user || user.applicationId !== applicationId) {
        return res.status(404).json({ message: "User not found" });
      }
      const unpaused = await storage.unpauseAppUser(userId);
      if (!unpaused) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User unpaused successfully" });
    } catch (error) {
      console.error("Error unpausing app user:", error);
      res.status(500).json({ message: "Failed to unpause user" });
    }
  });
  app2.delete("/api/applications/:id/users/:userId", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const userId = parseInt(req.params.userId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const ownerId = req.user.claims.sub;
      if (application.userId !== ownerId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const user = await storage.getAppUser(userId);
      if (!user || user.applicationId !== applicationId) {
        return res.status(404).json({ message: "User not found" });
      }
      const deleted = await storage.deleteAppUser(userId);
      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting app user:", error);
      res.status(500).json({ message: "Failed to delete user" });
    }
  });
  app2.post("/api/applications/:id/users/:userId/reset-hwid", isAuthenticated, async (req, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const userId = parseInt(req.params.userId);
      const application = await storage.getApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      const ownerId = req.user.claims.sub;
      if (application.userId !== ownerId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const user = await storage.getAppUser(userId);
      if (!user || user.applicationId !== applicationId) {
        return res.status(404).json({ message: "User not found" });
      }
      const reset = await storage.resetAppUserHwid(userId);
      if (!reset) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "HWID reset successfully" });
    } catch (error) {
      console.error("Error resetting user HWID:", error);
      res.status(500).json({ message: "Failed to reset HWID" });
    }
  });
  app2.post("/api/auth/register", async (req, res) => {
    try {
      const { username, password, email, licenseKey, hwid } = req.body;
      if (!username || !password || !licenseKey) {
        return res.status(400).json({
          success: false,
          message: "Username, password, and license key are required"
        });
      }
      const license = await storage.getLicenseKeyByKey(licenseKey);
      if (!license) {
        return res.status(400).json({ success: false, message: "Invalid license key" });
      }
      const validLicense = await storage.validateLicenseKey(licenseKey, license.applicationId);
      if (!validLicense) {
        return res.status(400).json({ success: false, message: "License key is expired or inactive" });
      }
      if (license.currentUsers >= license.maxUsers) {
        return res.status(400).json({ success: false, message: "License key has reached maximum user limit" });
      }
      const existingUser = await storage.getAppUserByUsername(license.applicationId, username);
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Username already exists" });
      }
      if (email) {
        const existingEmail = await storage.getAppUserByEmail(license.applicationId, email);
        if (existingEmail) {
          return res.status(400).json({ success: false, message: "Email already exists" });
        }
      }
      const userData = {
        username,
        password,
        email: email || null,
        licenseKey,
        hwid: hwid || null,
        expiresAt: license.expiresAt.toISOString()
      };
      const user = await storage.createAppUserWithLicense(license.applicationId, userData);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          expiresAt: user.expiresAt,
          createdAt: user.createdAt
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ success: false, message: "Registration failed" });
    }
  });
  app2.post("/api/v1/login", validateApiKey, async (req, res) => {
    try {
      const application = req.application;
      const validatedData = loginSchema.parse(req.body);
      const { username, password, version, hwid } = validatedData;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers["user-agent"];
      console.log(`Login attempt - Username: ${username}, IP: ${ipAddress}, Version: ${version}, HWID: ${hwid ? hwid.substring(0, 8) + "..." : "none"}`);
      if (ipAddress) {
        const ipBlacklist = await storage.checkBlacklist(application.id, "ip", ipAddress);
        if (ipBlacklist) {
          await webhookService.logAndNotify(
            application.userId,
            application.id,
            "login_blocked_ip",
            { username },
            {
              success: false,
              errorMessage: `Login blocked: IP ${ipAddress} is blacklisted - ${ipBlacklist.reason || "No reason provided"}`,
              ipAddress,
              userAgent,
              hwid
            }
          );
          return res.status(403).json({
            success: false,
            message: "Access denied: IP address is blacklisted"
          });
        }
      }
      const usernameBlacklist = await storage.checkBlacklist(application.id, "username", username);
      if (usernameBlacklist) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "login_blocked_username",
          { username },
          {
            success: false,
            errorMessage: `Login blocked: Username ${username} is blacklisted - ${usernameBlacklist.reason || "No reason provided"}`,
            ipAddress,
            userAgent,
            hwid
          }
        );
        return res.status(403).json({
          success: false,
          message: "Access denied: Username is blacklisted"
        });
      }
      if (hwid) {
        const hwidBlacklist = await storage.checkBlacklist(application.id, "hwid", hwid);
        if (hwidBlacklist) {
          await webhookService.logAndNotify(
            application.userId,
            application.id,
            "login_blocked_hwid",
            { username },
            {
              success: false,
              errorMessage: `Login blocked: HWID ${hwid} is blacklisted - ${hwidBlacklist.reason || "No reason provided"}`,
              ipAddress,
              userAgent,
              hwid
            }
          );
          return res.status(403).json({
            success: false,
            message: "Access denied: Hardware ID is blacklisted"
          });
        }
      }
      if (version && version !== application.version) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "version_mismatch",
          { username },
          {
            success: false,
            errorMessage: `Version mismatch: Required ${application.version}, provided ${version}`,
            ipAddress,
            userAgent,
            hwid,
            metadata: { required_version: application.version, current_version: version }
          }
        );
        return res.status(400).json({
          success: false,
          message: application.versionMismatchMessage || "Please update your application to the latest version!",
          required_version: application.version,
          current_version: version
        });
      }
      const user = await storage.getAppUserByUsername(application.id, username);
      if (!user) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "login_failed",
          { username },
          {
            success: false,
            errorMessage: "User not found",
            ipAddress,
            userAgent,
            hwid,
            metadata: {
              reason: "non_existent_user",
              attempt_time: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        );
        return res.status(401).json({
          success: false,
          message: application.loginFailedMessage || "Invalid credentials!"
        });
      }
      if (!user.isActive) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "account_disabled",
          user,
          {
            success: false,
            errorMessage: "Account is disabled",
            ipAddress,
            userAgent,
            hwid
          }
        );
        return res.status(401).json({
          success: false,
          message: application.accountDisabledMessage || "Account is disabled!"
        });
      }
      if (user.isPaused) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "account_disabled",
          user,
          {
            success: false,
            errorMessage: "Account is temporarily paused",
            ipAddress,
            userAgent,
            hwid
          }
        );
        return res.status(401).json({
          success: false,
          message: "Account is temporarily paused. Contact support."
        });
      }
      if (user.expiresAt && /* @__PURE__ */ new Date() > user.expiresAt) {
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "account_expired",
          user,
          {
            success: false,
            errorMessage: "Account has expired",
            ipAddress,
            userAgent,
            hwid,
            metadata: {
              expired_at: user.expiresAt.toISOString()
            }
          }
        );
        return res.status(401).json({
          success: false,
          message: application.accountExpiredMessage || "Account has expired!"
        });
      }
      const isValidPassword = await storage.validatePassword(password, user.password);
      if (!isValidPassword) {
        await storage.updateAppUser(user.id, {
          loginAttempts: user.loginAttempts + 1,
          lastLoginAttempt: /* @__PURE__ */ new Date()
        });
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "login_failed",
          user,
          {
            success: false,
            errorMessage: "Invalid password provided",
            ipAddress,
            userAgent,
            hwid,
            metadata: {
              login_attempts: user.loginAttempts + 1,
              attempt_time: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        );
        return res.status(401).json({
          success: false,
          message: application.loginFailedMessage || "Invalid credentials!"
        });
      }
      if (application.hwidLockEnabled) {
        if (!hwid) {
          return res.status(400).json({
            success: false,
            message: "Hardware ID is required for this application"
          });
        }
        if (!user.hwid) {
          await storage.updateAppUser(user.id, { hwid });
        } else if (user.hwid !== hwid) {
          await webhookService.logAndNotify(
            application.userId,
            application.id,
            "hwid_mismatch",
            user,
            {
              success: false,
              errorMessage: `HWID mismatch: Expected ${user.hwid}, got ${hwid}`,
              ipAddress,
              userAgent,
              hwid,
              metadata: {
                expected_hwid: user.hwid,
                provided_hwid: hwid
              }
            }
          );
          return res.status(401).json({
            success: false,
            message: application.hwidMismatchMessage || "Hardware ID mismatch detected!"
          });
        }
      }
      await storage.updateAppUser(user.id, {
        lastLogin: /* @__PURE__ */ new Date(),
        loginAttempts: 0,
        lastLoginAttempt: /* @__PURE__ */ new Date()
      });
      await webhookService.logAndNotify(
        application.userId,
        application.id,
        "user_login",
        user,
        {
          success: true,
          ipAddress,
          userAgent,
          hwid,
          metadata: {
            login_time: (/* @__PURE__ */ new Date()).toISOString(),
            version,
            hwid_locked: application.hwidLockEnabled && !!user.hwid
          }
        }
      );
      res.json({
        success: true,
        message: application.loginSuccessMessage || "Login successful!",
        user_id: user.id,
        username: user.username,
        email: user.email,
        expires_at: user.expiresAt,
        hwid_locked: application.hwidLockEnabled && !!user.hwid
      });
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid request data", errors: error.errors });
      }
      console.error("Error during login:", error);
      res.status(500).json({ success: false, message: "Login failed" });
    }
  });
  app2.post("/api/v1/register", validateApiKey, async (req, res) => {
    try {
      const application = req.application;
      const { username, password, email, license_key, version, hwid } = req.body;
      console.log("Register request body:", { username, password: password ? "[HIDDEN]" : void 0, email, license_key, version, hwid });
      if (!username || !password || !license_key) {
        console.log("Missing required fields:", { username: !!username, password: !!password, license_key: !!license_key });
        return res.status(400).json({
          success: false,
          message: "Username, password, and license key are required"
        });
      }
      const license = await storage.validateLicenseKey(license_key, application.id);
      if (!license) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired license key"
        });
      }
      if (license.currentUsers >= license.maxUsers) {
        return res.status(400).json({
          success: false,
          message: "License key has reached maximum user limit"
        });
      }
      const existingUser = await storage.getAppUserByUsername(application.id, username);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Username already exists"
        });
      }
      if (email) {
        const existingEmail = await storage.getAppUserByEmail(application.id, email);
        if (existingEmail) {
          return res.status(400).json({
            success: false,
            message: "Email already exists"
          });
        }
      }
      const userData = {
        username,
        password,
        email: email || null,
        licenseKey: license_key,
        hwid: hwid || null
      };
      const user = await storage.createAppUserWithLicense(application.id, userData);
      await webhookService.logAndNotify(
        application.userId,
        application.id,
        "user_registration",
        user,
        {
          success: true,
          ipAddress: req.ip || req.connection.remoteAddress,
          userAgent: req.headers["user-agent"],
          hwid,
          metadata: {
            registration_time: (/* @__PURE__ */ new Date()).toISOString(),
            license_key,
            version
          }
        }
      );
      res.json({
        success: true,
        message: "Registration successful! You can now login with your credentials.",
        user_id: user.id,
        username: user.username,
        email: user.email,
        expires_at: user.expiresAt
      });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ success: false, message: "Registration failed" });
    }
  });
  app2.post("/api/v1/verify", validateApiKey, async (req, res) => {
    try {
      const application = req.application;
      const { user_id } = req.body;
      if (!user_id) {
        return res.status(400).json({ success: false, message: "User ID required" });
      }
      const user = await storage.getAppUser(user_id);
      if (!user || user.applicationId !== application.id) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (!user.isActive) {
        return res.status(401).json({ success: false, message: "Account is disabled" });
      }
      if (user.isPaused) {
        return res.status(401).json({ success: false, message: "Account is temporarily paused" });
      }
      if (user.expiresAt && /* @__PURE__ */ new Date() > user.expiresAt) {
        return res.status(401).json({ success: false, message: "Account has expired" });
      }
      res.json({
        success: true,
        message: "User verified",
        user_id: user.id,
        username: user.username,
        email: user.email,
        expires_at: user.expiresAt
      });
    } catch (error) {
      console.error("Error verifying user:", error);
      res.status(500).json({ success: false, message: "Verification failed" });
    }
  });
  app2.post("/api/v1/session/track", validateApiKey, async (req, res) => {
    try {
      const application = req.application;
      const { user_id, session_token, action } = req.body;
      if (!user_id) {
        return res.status(400).json({ success: false, message: "User ID required" });
      }
      const user = await storage.getAppUser(user_id);
      if (!user || user.applicationId !== application.id) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (action === "start" && session_token) {
        await storage.createActiveSession({
          applicationId: application.id,
          appUserId: user.id,
          sessionToken: session_token,
          ipAddress: req.ip || req.connection.remoteAddress,
          userAgent: req.headers["user-agent"] || "",
          location: null,
          hwid: null,
          expiresAt: null,
          isActive: true
        });
        await webhookService.logAndNotify(
          application.userId,
          application.id,
          "session_start",
          user,
          {
            success: true,
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.headers["user-agent"],
            metadata: {
              session_token,
              session_start_time: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        );
        res.json({
          success: true,
          message: "Session started",
          session_token
        });
      } else if (action === "heartbeat" && session_token) {
        const updated = await storage.updateSessionActivity(session_token);
        res.json({
          success: updated,
          message: updated ? "Session updated" : "Session not found"
        });
      } else if (action === "end" && session_token) {
        const ended = await storage.endSession(session_token);
        if (ended) {
          await webhookService.logAndNotify(
            application.userId,
            application.id,
            "session_end",
            user,
            {
              success: true,
              ipAddress: req.ip || req.connection.remoteAddress,
              userAgent: req.headers["user-agent"],
              metadata: {
                session_token,
                session_end_time: (/* @__PURE__ */ new Date()).toISOString()
              }
            }
          );
        }
        res.json({
          success: ended,
          message: ended ? "Session ended" : "Session not found"
        });
      } else {
        res.status(400).json({ success: false, message: "Invalid action or missing session_token" });
      }
    } catch (error) {
      console.error("Error tracking session:", error);
      res.status(500).json({ success: false, message: "Session tracking failed" });
    }
  });
  app2.get("/api/webhooks", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const webhooks2 = await storage.getUserWebhooks(userId);
      res.json(webhooks2);
    } catch (error) {
      console.error("Error fetching webhooks:", error);
      res.status(500).json({ message: "Failed to fetch webhooks" });
    }
  });
  app2.post("/api/webhooks", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertWebhookSchema.parse(req.body);
      try {
        const url = new URL(validatedData.url);
        if (!["http:", "https:"].includes(url.protocol)) {
          return res.status(400).json({ message: "Webhook URL must use HTTP or HTTPS protocol" });
        }
      } catch (urlError) {
        return res.status(400).json({ message: "Invalid webhook URL format" });
      }
      try {
        console.log(`Testing webhook URL: ${validatedData.url}`);
        const isDiscordWebhook = validatedData.url.includes("discord.com/api/webhooks");
        let testPayload;
        if (isDiscordWebhook) {
          testPayload = {
            content: "PhantomAuth Webhook Validation Complete",
            embeds: [{
              title: "\u2705 PhantomAuth Webhook Validation",
              description: "This webhook endpoint has been successfully validated and registered with PhantomAuth.",
              color: 65280,
              fields: [
                {
                  name: "Status",
                  value: "Webhook endpoint validated",
                  inline: true
                },
                {
                  name: "Server",
                  value: "Vietnam/India Optimized",
                  inline: true
                },
                {
                  name: "Connection Time",
                  value: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                  inline: false
                }
              ],
              footer: {
                text: "PhantomAuth - Webhook Validation System"
              },
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }]
          };
        } else {
          testPayload = {
            test: true,
            message: "Webhook endpoint validation test",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15e3);
        const headers = {
          "Content-Type": "application/json",
          "User-Agent": "PhantomAuth-WebhookValidator/1.0",
          "Accept": "application/json, text/plain, */*",
          "Connection": "keep-alive"
        };
        const response = await fetch(validatedData.url, {
          method: "POST",
          headers,
          body: JSON.stringify(testPayload),
          signal: controller.signal,
          keepalive: true,
          mode: "cors"
        });
        clearTimeout(timeoutId);
        if (isDiscordWebhook) {
          if (response.status === 204 || response.status === 200) {
            console.log(`Discord webhook validation successful: Status ${response.status}`);
          } else {
            const responseText = await response.text().catch(() => "");
            return res.status(400).json({
              message: "Discord webhook validation failed. Please verify the webhook URL is correct.",
              details: `Status: ${response.status}, Response: ${responseText.substring(0, 200)}`
            });
          }
        } else {
          const contentType = response.headers.get("content-type") || "";
          const responseText = await response.text();
          if (responseText.includes("<!DOCTYPE") || responseText.includes("<html>")) {
            return res.status(400).json({
              message: "Webhook endpoint returned HTML instead of accepting JSON. Please verify the URL accepts POST requests with JSON payloads.",
              details: `Status: ${response.status}, Content-Type: ${contentType}`
            });
          }
        }
        console.log(`Webhook test completed: Status ${response.status}`);
      } catch (testError) {
        const errorMessage = testError instanceof Error ? testError.message : String(testError);
        if (errorMessage.includes("AbortError") || errorMessage.includes("timeout")) {
          console.log(`Webhook URL test timed out, but allowing creation: ${validatedData.url}`);
        } else {
          return res.status(400).json({
            message: "Webhook endpoint test failed. Please verify the URL is accessible and accepts POST requests.",
            error: errorMessage
          });
        }
      }
      const webhook = await storage.createWebhook(userId, validatedData);
      res.status(201).json(webhook);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error creating webhook:", error);
      res.status(500).json({ message: "Failed to create webhook" });
    }
  });
  app2.put("/api/webhooks/:id", isAuthenticated, async (req, res) => {
    try {
      const webhookId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      const validatedData = insertWebhookSchema.partial().parse(req.body);
      const webhooks2 = await storage.getUserWebhooks(userId);
      const webhook = webhooks2.find((w) => w.id === webhookId);
      if (!webhook) {
        return res.status(404).json({ message: "Webhook not found" });
      }
      const updatedWebhook = await storage.updateWebhook(webhookId, validatedData);
      if (!updatedWebhook) {
        return res.status(404).json({ message: "Webhook not found" });
      }
      res.json(updatedWebhook);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error updating webhook:", error);
      res.status(500).json({ message: "Failed to update webhook" });
    }
  });
  app2.delete("/api/webhooks/:id", isAuthenticated, async (req, res) => {
    try {
      const webhookId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      const webhooks2 = await storage.getUserWebhooks(userId);
      const webhook = webhooks2.find((w) => w.id === webhookId);
      if (!webhook) {
        return res.status(404).json({ message: "Webhook not found" });
      }
      const deleted = await storage.deleteWebhook(webhookId);
      if (!deleted) {
        return res.status(404).json({ message: "Webhook not found" });
      }
      res.json({ message: "Webhook deleted successfully" });
    } catch (error) {
      console.error("Error deleting webhook:", error);
      res.status(500).json({ message: "Failed to delete webhook" });
    }
  });
  app2.get("/api/blacklist", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications2 = await storage.getAllApplications(userId);
      const applicationIds = applications2.map((app3) => app3.id);
      const blacklistEntries = await storage.getBlacklistEntries();
      const filteredEntries = blacklistEntries.filter(
        (entry) => !entry.applicationId || applicationIds.includes(entry.applicationId)
      );
      res.json(filteredEntries);
    } catch (error) {
      console.error("Error fetching blacklist:", error);
      res.status(500).json({ message: "Failed to fetch blacklist" });
    }
  });
  app2.post("/api/blacklist", isAuthenticated, async (req, res) => {
    try {
      console.log("Blacklist POST - req.user:", req.user);
      console.log("Blacklist POST - req.session:", req.session);
      console.log("Blacklist POST - req.body:", req.body);
      const userId = req.user.claims.sub;
      const validatedData = insertBlacklistSchema.parse(req.body);
      if (validatedData.applicationId) {
        const application = await storage.getApplication(validatedData.applicationId);
        if (!application || application.userId !== userId) {
          return res.status(403).json({ message: "Access denied" });
        }
      }
      const blacklistEntry = await storage.createBlacklistEntry(validatedData);
      res.status(201).json(blacklistEntry);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error creating blacklist entry:", error);
      res.status(500).json({ message: "Failed to create blacklist entry" });
    }
  });
  app2.delete("/api/blacklist/:id", isAuthenticated, async (req, res) => {
    try {
      const entryId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      const blacklistEntries = await storage.getBlacklistEntries();
      const entry = blacklistEntries.find((e) => e.id === entryId);
      if (!entry) {
        return res.status(404).json({ message: "Blacklist entry not found" });
      }
      if (entry.applicationId) {
        const application = await storage.getApplication(entry.applicationId);
        if (!application || application.userId !== userId) {
          return res.status(403).json({ message: "Access denied" });
        }
      }
      const deleted = await storage.deleteBlacklistEntry(entryId);
      if (!deleted) {
        return res.status(404).json({ message: "Blacklist entry not found" });
      }
      res.json({ message: "Blacklist entry deleted successfully" });
    } catch (error) {
      console.error("Error deleting blacklist entry:", error);
      res.status(500).json({ message: "Failed to delete blacklist entry" });
    }
  });
  app2.get("/api/activity-logs", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const applicationId = req.query.applicationId;
      if (applicationId) {
        const application = await storage.getApplication(parseInt(applicationId));
        if (!application || application.userId !== userId) {
          return res.status(403).json({ message: "Access denied" });
        }
        const logs = await storage.getActivityLogs(parseInt(applicationId));
        res.json(logs);
      } else {
        const applications2 = await storage.getAllApplications(userId);
        const allLogs = [];
        for (const app3 of applications2) {
          const logs = await storage.getActivityLogs(app3.id);
          allLogs.push(...logs);
        }
        allLogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        res.json(allLogs);
      }
    } catch (error) {
      console.error("Error fetching activity logs:", error);
      res.status(500).json({ message: "Failed to fetch activity logs" });
    }
  });
  app2.get("/api/activity-logs/user/:userId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const appUserId = parseInt(req.params.userId);
      const appUser = await storage.getAppUser(appUserId);
      if (!appUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const application = await storage.getApplication(appUser.applicationId);
      if (!application || application.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const logs = await storage.getUserActivityLogs(appUserId);
      res.json(logs);
    } catch (error) {
      console.error("Error fetching user activity logs:", error);
      res.status(500).json({ message: "Failed to fetch user activity logs" });
    }
  });
  app2.post("/api/test-webhook", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications2 = await storage.getAllApplications(userId);
      if (applications2.length === 0) {
        return res.status(400).json({ message: "No applications found. Create an application first." });
      }
      const application = applications2[0];
      const { event = "user_login" } = req.body;
      const testEvents = {
        "user_login": {
          success: true,
          userData: { id: 1, username: "test_user", email: "test@example.com" },
          options: { ipAddress: req.ip, userAgent: req.headers["user-agent"], hwid: "TEST-HWID" }
        },
        "login_failed": {
          success: false,
          userData: { id: 1, username: "test_user", email: "test@example.com" },
          options: { success: false, errorMessage: "Invalid password", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "user_register": {
          success: true,
          userData: { id: 2, username: "new_user", email: "new@example.com" },
          options: { ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "account_disabled": {
          success: false,
          userData: { id: 1, username: "disabled_user", email: "disabled@example.com" },
          options: { success: false, errorMessage: "Account is disabled", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "account_expired": {
          success: false,
          userData: { id: 1, username: "expired_user", email: "expired@example.com" },
          options: { success: false, errorMessage: "Account has expired", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "version_mismatch": {
          success: false,
          userData: { id: 1, username: "test_user", email: "test@example.com" },
          options: { success: false, errorMessage: "Version mismatch detected", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "hwid_mismatch": {
          success: false,
          userData: { id: 1, username: "test_user", email: "test@example.com" },
          options: { success: false, errorMessage: "Hardware ID mismatch", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "login_blocked_ip": {
          success: false,
          userData: { username: "test_user" },
          options: { success: false, errorMessage: "IP address is blacklisted", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "login_blocked_username": {
          success: false,
          userData: { username: "blocked_user" },
          options: { success: false, errorMessage: "Username is blacklisted", ipAddress: req.ip, userAgent: req.headers["user-agent"] }
        },
        "login_blocked_hwid": {
          success: false,
          userData: { username: "test_user" },
          options: { success: false, errorMessage: "Hardware ID is blacklisted", ipAddress: req.ip, userAgent: req.headers["user-agent"], hwid: "BLOCKED-HWID" }
        }
      };
      const testData = testEvents[event] || testEvents["user_login"];
      await webhookService.logAndNotify(
        userId,
        application.id,
        event,
        testData.userData,
        testData.options
      );
      res.json({
        success: true,
        message: `Test webhook sent for event: ${event}`,
        application_id: application.id
      });
    } catch (error) {
      console.error("Error sending test webhook:", error);
      res.status(500).json({ message: "Failed to send test webhook" });
    }
  });
  app2.post("/api/webhook-diagnostics", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { webhook_url, test_type = "basic" } = req.body;
      if (!webhook_url) {
        return res.status(400).json({ message: "Webhook URL is required" });
      }
      const serverInfo = {
        region: process.env.REPLIT_DEPLOYMENT_REGION || "unknown",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        nodejs_version: process.version,
        platform: process.platform,
        memory_usage: process.memoryUsage(),
        uptime: process.uptime()
      };
      const requestInfo = {
        client_ip: req.ip || req.connection.remoteAddress,
        user_agent: req.headers["user-agent"],
        country: req.headers["cf-ipcountry"] || "unknown",
        forwarded_for: req.headers["x-forwarded-for"],
        cloudflare_ray: req.headers["cf-ray"],
        accept_language: req.headers["accept-language"],
        connection_type: req.headers["connection"],
        via_header: req.headers["via"]
      };
      console.log(`Starting webhook diagnostics for: ${webhook_url}`);
      console.log(`Test type: ${test_type}, Server region: ${serverInfo.region}`);
      const diagnostics = {
        server_info: serverInfo,
        request_info: requestInfo,
        connectivity_tests: [],
        performance_metrics: {},
        recommendations: []
      };
      const isDiscordWebhook = webhook_url.includes("discord.com/api/webhooks");
      const testConfigs = [
        { name: "Basic Test", timeout: 2e4, retry: false },
        { name: "Extended Timeout", timeout: 6e4, retry: false },
        { name: "With Retry Logic", timeout: 45e3, retry: true }
      ];
      if (test_type === "comprehensive") {
        testConfigs.push(
          { name: "High Latency Test", timeout: 9e4, retry: true },
          { name: "Quick Test", timeout: 1e4, retry: false }
        );
      }
      let discordDelay = 0;
      for (const config of testConfigs) {
        if (isDiscordWebhook && discordDelay > 0) {
          console.log(`Waiting ${discordDelay}ms to respect Discord rate limits...`);
          await new Promise((resolve) => setTimeout(resolve, discordDelay));
        }
        const testStart = Date.now();
        let testResult = {
          test_name: config.name,
          success: false,
          status_code: 0,
          response_time_ms: 0,
          response_headers: {},
          error: null,
          retry_attempts: 0
        };
        try {
          console.log(`Running ${config.name} for ${webhook_url}`);
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), config.timeout);
          const isDiscordWebhook2 = webhook_url.includes("discord.com/api/webhooks");
          let testPayload;
          if (isDiscordWebhook2) {
            testPayload = {
              content: `PhantomAuth Connectivity Test - ${config.name}`,
              embeds: [{
                title: "\u{1F527} PhantomAuth Connectivity Test",
                description: `Testing webhook connectivity from ${serverInfo.region || "Vietnam"} server to India`,
                color: 65280,
                fields: [
                  {
                    name: "Test Type",
                    value: config.name,
                    inline: true
                  },
                  {
                    name: "Server Region",
                    value: serverInfo.region || "Vietnam/Unknown",
                    inline: true
                  },
                  {
                    name: "Response Time Target",
                    value: "< 2 seconds optimal",
                    inline: true
                  },
                  {
                    name: "Test Time",
                    value: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                    inline: false
                  }
                ],
                footer: {
                  text: "PhantomAuth Webhook Diagnostics - India Vietnam Connectivity"
                },
                timestamp: (/* @__PURE__ */ new Date()).toISOString()
              }]
            };
          } else {
            testPayload = {
              test: true,
              test_type: config.name,
              message: "Vietnam Server Connectivity Test from PhantomAuth",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              server_diagnostics: serverInfo,
              client_info: requestInfo
            };
          }
          let attempt = 0;
          let lastError = null;
          do {
            attempt++;
            const attemptStart = Date.now();
            try {
              const headers = {
                "Content-Type": "application/json",
                "User-Agent": "PhantomAuth-IndiaVietnamDiagnostics/1.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "X-Server-Region": serverInfo.region || "Vietnam",
                "X-Client-Country": "India",
                "X-Test-Type": config.name,
                "X-Attempt": attempt.toString()
              };
              if (!isDiscordWebhook2) {
                headers["X-Webhook-Test"] = "true";
                headers["X-PhantomAuth-Diagnostics"] = "1.0";
              }
              const response = await fetch(webhook_url, {
                method: "POST",
                headers,
                body: JSON.stringify(testPayload),
                signal: controller.signal,
                // Optimize for India-Vietnam connectivity
                keepalive: true,
                mode: "cors",
                cache: "no-cache",
                redirect: "follow",
                referrerPolicy: "no-referrer"
              });
              clearTimeout(timeoutId);
              const responseTime = Date.now() - attemptStart;
              testResult = {
                ...testResult,
                success: response.ok,
                status_code: response.status,
                response_time_ms: responseTime,
                response_headers: Object.fromEntries(response.headers.entries()),
                retry_attempts: attempt - 1
              };
              if (!response.ok) {
                try {
                  const contentType = response.headers.get("content-type") || "";
                  const responseText = await response.text();
                  if (responseText.includes("<!DOCTYPE") || responseText.includes("<html>")) {
                    testResult.error = `Webhook endpoint returned HTML page instead of JSON. This usually means the URL is incorrect or doesn't accept POST requests. Status: ${response.status}`;
                  } else if (contentType.includes("application/json")) {
                    try {
                      const jsonError = JSON.parse(responseText);
                      testResult.error = JSON.stringify(jsonError);
                    } catch (jsonParseError) {
                      testResult.error = `Invalid JSON response: ${responseText.substring(0, 200)}...`;
                    }
                  } else {
                    testResult.error = `Non-JSON response (${contentType}): ${responseText.substring(0, 200)}...`;
                  }
                } catch (e) {
                  testResult.error = `HTTP ${response.status} - Unable to read response`;
                }
              } else {
                console.log(`\u2705 ${config.name} successful in ${responseTime}ms`);
                if (isDiscordWebhook2) {
                  discordDelay = Math.max(2e3, discordDelay);
                }
                break;
              }
            } catch (error) {
              clearTimeout(timeoutId);
              const responseTime = Date.now() - attemptStart;
              lastError = error;
              testResult = {
                ...testResult,
                response_time_ms: responseTime,
                error: error instanceof Error ? error.message : String(error),
                retry_attempts: attempt - 1
              };
              console.log(`\u274C ${config.name} attempt ${attempt} failed: ${testResult.error}`);
            }
          } while (config.retry && attempt < 3 && !testResult.success);
          if (isDiscordWebhook2 && testResult.status_code === 429) {
            discordDelay = Math.min(discordDelay * 2, 3e4);
            testResult.error = `Discord rate limit hit. Increasing delay to ${discordDelay}ms for subsequent tests.`;
          } else if (isDiscordWebhook2 && testResult.success) {
            discordDelay = Math.max(1e3, discordDelay / 2);
          }
          if (!testResult.success && lastError) {
            testResult.error = lastError instanceof Error ? lastError.message : String(lastError);
          }
        } catch (error) {
          const responseTime = Date.now() - testStart;
          testResult = {
            ...testResult,
            response_time_ms: responseTime,
            error: error instanceof Error ? error.message : String(error)
          };
        }
        diagnostics.connectivity_tests.push(testResult);
        const configIndex = testConfigs.indexOf(config);
        if (configIndex < testConfigs.length - 1) {
          let delayTime = 2e3;
          if (isDiscordWebhook) {
            delayTime = Math.max(3e3, discordDelay);
            console.log(`Discord webhook detected - using ${delayTime}ms delay between tests`);
          }
          console.log(`Waiting ${delayTime}ms before next test...`);
          await new Promise((resolve) => setTimeout(resolve, delayTime));
        }
      }
      const successfulTests = diagnostics.connectivity_tests.filter((t) => t.success);
      const failedTests = diagnostics.connectivity_tests.filter((t) => !t.success);
      if (successfulTests.length > 0) {
        const responseTimes = successfulTests.map((t) => t.response_time_ms);
        diagnostics.performance_metrics = {
          avg_response_time: Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length),
          min_response_time: Math.min(...responseTimes),
          max_response_time: Math.max(...responseTimes),
          success_rate: Math.round(successfulTests.length / diagnostics.connectivity_tests.length * 100)
        };
      }
      if (failedTests.length > 0) {
        diagnostics.recommendations.push("Some connectivity tests failed. Consider checking your webhook endpoint.");
      }
      if (diagnostics.performance_metrics.avg_response_time > 1e4) {
        diagnostics.recommendations.push("High response times detected. Consider optimizing your webhook endpoint or using a CDN.");
      }
      if (diagnostics.performance_metrics.success_rate < 100) {
        diagnostics.recommendations.push("Intermittent failures detected. Consider implementing retry logic in your webhook endpoint.");
      }
      if (successfulTests.length === 0) {
        diagnostics.recommendations.push("All connectivity tests failed. Please verify your webhook URL and endpoint availability.");
      } else {
        diagnostics.recommendations.push("Webhook endpoint is reachable from Vietnam server.");
      }
      console.log(`Webhook diagnostics completed: ${successfulTests.length}/${diagnostics.connectivity_tests.length} tests passed`);
      res.json({
        success: true,
        message: "Enhanced webhook diagnostics completed",
        diagnostics,
        summary: {
          total_tests: diagnostics.connectivity_tests.length,
          successful_tests: successfulTests.length,
          failed_tests: failedTests.length,
          overall_status: successfulTests.length > 0 ? "WORKING" : "FAILED"
        }
      });
    } catch (error) {
      console.error("Error running webhook diagnostics:", error);
      let errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("Unexpected token") && errorMessage.includes("<!DOCTYPE")) {
        errorMessage = "Webhook endpoint returned HTML page instead of JSON. This usually means the URL is incorrect or doesn't accept POST requests with JSON payloads.";
      } else if (errorMessage.includes("Unexpected token")) {
        errorMessage = "Webhook endpoint returned invalid JSON response. Please verify the endpoint accepts JSON and returns valid responses.";
      }
      res.status(500).json({
        success: false,
        message: "Failed to run diagnostics",
        error: errorMessage,
        diagnostics: {
          connectivity_tests: [{
            test_name: "Initial Connection",
            success: false,
            error: errorMessage,
            status_code: 0,
            response_time_ms: 0
          }]
        },
        summary: {
          total_tests: 1,
          successful_tests: 0,
          failed_tests: 1,
          overall_status: "FAILED"
        }
      });
    }
  });
  app2.get("/api/admin/users", async (req, res) => {
    try {
      console.log("Admin users endpoint - fetching all users");
      const users2 = await storage.getAllUsers();
      console.log(`Found ${users2.length} users`);
      res.json(users2);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });
  app2.patch("/api/admin/users/:userId", isAuthenticated, requirePermission(PERMISSIONS.MANAGE_PERMISSIONS), async (req, res) => {
    try {
      const { userId } = req.params;
      const { role, permissions, isActive } = req.body;
      const currentUser = await storage.getUser(req.user.claims.sub);
      if (currentUser?.role !== "owner" && userId !== req.user.claims.sub) {
        return res.status(403).json({ message: "Only the owner can modify other users" });
      }
      const updatedUser = await storage.updateUser(userId, { role, permissions, isActive });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Failed to update user" });
    }
  });
  app2.delete("/api/admin/users/:userId", isAuthenticated, requireRole(ROLES.OWNER), async (req, res) => {
    try {
      const { userId } = req.params;
      if (userId === req.user.claims.sub) {
        return res.status(400).json({ message: "Cannot delete your own account" });
      }
      const deleted = await storage.deleteUser(userId);
      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Failed to delete user" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid as nanoid2 } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid2()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-API-Key");
  res.header("Access-Control-Max-Age", "86400");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("Referrer-Policy", "strict-origin-when-cross-origin");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(express2.json({ limit: "10mb" }));
app.use(express2.urlencoded({ extended: false, limit: "10mb" }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`Error ${status} on ${req.method} ${req.path}:`, err);
    res.status(status).json({ message });
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
