CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY,             
    file_name VARCHAR(255) UNIQUE NOT NULL,   
    extension VARCHAR(50) NOT NULL,   
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW() 
);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON files
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();