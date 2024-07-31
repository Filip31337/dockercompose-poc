# Use the official Oracle Free image as the base image
FROM gvenzl/oracle-free:23-slim

# Copy the initialization scripts into the container
COPY init_scripts /container-entrypoint-initdb.d/

# Expose the default Oracle port
EXPOSE 1521
