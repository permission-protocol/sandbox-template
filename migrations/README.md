# Migrations

Migrations are a protected path in this sandbox because schema changes can destroy customer data. Any AI-authored migration should include a rollback plan, avoid implicit drops, and never remove tables or columns without an explicit archive strategy.
