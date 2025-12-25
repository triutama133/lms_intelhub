-- Seed script: create tenant 'lms_2' and backfill users
-- Complete version with all required columns

-- 1) Create tenant if not exists
INSERT INTO tenants (id, name, title, bucket, theme, description, active, created_at, updated_at)
VALUES ('lms_2', 'Integrated Learning Hub', 'Integrated Learning Hub', 'lms-materials', 'blue', 'Default tenant for Integrated Learning Hub', true, NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- 2) Backfill users without tenant_id
UPDATE users
SET tenant_id = 'lms_2'
WHERE tenant_id IS NULL;

-- Verify tenant created
SELECT id, name, title FROM tenants WHERE id='lms_2';

-- Note:
-- Run this script with psql:
-- PGPASSWORD='your_password' psql -h localhost -U lms_user -d lms_db -f scripts/seed_tenant_lms_2.sql
