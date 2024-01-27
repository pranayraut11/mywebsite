FROM openjdk:17-jdk-slim

COPY target/website.jar opt/website.jar

ENTRYPOINT ["java", "-jar", "opt/website.jar"]