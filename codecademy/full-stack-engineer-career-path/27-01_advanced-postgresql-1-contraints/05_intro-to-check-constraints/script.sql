ALTER TABLE speakers
ADD CHECK (years_in_role < 100);