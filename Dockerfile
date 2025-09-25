# 1. Base image: Java 17 runtime
FROM openjdk:17-jdk-slim

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy the built JAR file from target folder into container
COPY target/*.jar app.jar

# 4. Expose the port Spring Boot will run on
EXPOSE 8080

# 5. Run the application
# 5. Start the Spring Boot application
ENTRYPOINT ["java","-jar","app.jar"]
