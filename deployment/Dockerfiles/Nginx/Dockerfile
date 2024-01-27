FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY blog-ui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
