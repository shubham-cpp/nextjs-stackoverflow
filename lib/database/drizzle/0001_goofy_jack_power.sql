DROP TABLE `sessions`;--> statement-breakpoint
ALTER TABLE `users` RENAME TO `regular_users`;--> statement-breakpoint
DROP INDEX IF EXISTS `users_email_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `regular_users_email_unique` ON `regular_users` (`email`);