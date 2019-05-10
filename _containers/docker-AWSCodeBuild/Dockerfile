FROM ubuntu:12.04
# Install apache
RUN apt-get update -y
RUN apt-get install -y apache2

# Create a simple web page
RUN echo "Hello Cloud Gurus!!!! This web page is running in a Docker container in AWS Elastic Container Service!!" > /var/www/index.html

# Configure apache, set a few variables, expose port 80 and start apache
RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D",  "FOREGROUND"]
