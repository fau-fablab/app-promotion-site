#!/bin/sh
if [ "$(id -u)" != "0" ]; then
    echo "This script must be executed as root and is only for provision in a vagrant image!"
    exit 42
fi
echo "[i] update"
apt-get update
echo "[i] remove foo"
apt-get purge -y landscape-* manpages ruby xserver-xorg-core
apt-get autoremove -y
echo "[i] upgrade"
apt-get -y upgrade
echo "[i] install"
apt-get -y install apache2 php5
echo "[i] configure"
sed -i "s/DocumentRoot \/var\/www\/html/DocumentRoot \/var\/www\/\n\t\<Directory \/var\/www\/\>\n\t\tAllowOverride all\n\t\<\/Directory\>/" /etc/apache2/sites-available/*.conf
a2enmod expires
service apache2 restart
echo "[i] finnished"
