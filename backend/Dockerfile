FROM tomcat:10.0-jdk17-corretto

# Remove the default ROOT webapp
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copy the WAR file to the webapps directory
COPY target/dockercompose-showcase-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

# Copy the keystore file
COPY src/main/resources/keystore.p12 /usr/local/tomcat/conf/keystore.p12

# Add SSL configuration to Tomcat's server.xml with SSLHostConfig
RUN sed -i '/<\/Service>/i \
<Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol" \
           maxThreads="150" SSLEnabled="true" scheme="https" secure="true" \
           clientAuth="false" sslProtocol="TLS" \
           keystoreFile="/usr/local/tomcat/conf/keystore.p12" \
           keystorePass="dockercomposepoc"> \
    <SSLHostConfig> \
        <Certificate certificateKeystoreFile="/usr/local/tomcat/conf/keystore.p12" certificateKeystorePassword="dockercomposepoc" type="RSA" /> \
    </SSLHostConfig> \
</Connector>' /usr/local/tomcat/conf/server.xml

EXPOSE 8443
