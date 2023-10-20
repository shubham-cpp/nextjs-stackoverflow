DROP INDEX IF EXISTS `email_idx`;--> statement-breakpoint
CREATE UNIQUE INDEX `regular_users_email_idx` ON `regular_users` (`email`);