# export SONAR_HOST=172.17.0.1:9000
# export SONAR_TOKEN=284313b660413000066e068500b85a04fcbd5574
# export REPO=$(PWD)/
# export CONFIG_FILE=$(PWD)/sonar-project.properties
echo $(pwd)
docker run \
    --rm \
    --link sonarqube \
    -e SONAR_HOST_URL="http://${SONAR_HOST}" \
    -e SONAR_LOGIN="${SONAR_TOKEN}" \
    -v $(pwd)/:/usr/src  \
    -v $(pwd)/sonar-project.properties:/opt/sonar-scanner/conf/sonar-scanner.properties \
    sonarsource/sonar-scanner-cli:latest

        # -v $CONFIG_FILE:/opt/sonar-scanner/conf/sonar-scanner.properties \
# sonar-scanner \
#   -Dsonar.projectKey=test-app \
#   -Dsonar.sources=. \
#   -Dsonar.host.url=http://localhost:9000 \
#   -Dsonar.login=284313b660413000066e068500b85a04fcbd5574


# docker run --rm --link sonarqube -e SONAR_HOST_URL="http://172.17.0.1:9000" -e SONAR_LOGIN="284313b660413000066e068500b85a04fcbd5574" -v "$(pwd)":/usr/src sonarsource/sonar-scanner-cli:latest
