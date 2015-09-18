# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  # NOTE: this is a quite huge and quite deprecated image - but the best wich atlas offers :(
  config.vm.box = "naelyn/ubuntu-trusty64-libvirt"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.hostname = "fablab-app-promotion-site"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # ACHTUNG: die VM kann auf den kompletten Einstellungsordner inkl. vagrantfile zugreifen, bietet also keine Kapselung!
  config.vm.synced_folder "./", "/vagrant/", disabled: true
  config.vm.synced_folder "./", "/var/www/"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "libvirt" do |libvirt|
    libvirt.driver = "qemu"
    libvirt.connect_via_ssh = false
    libvirt.username = "root"
    libvirt.storage_pool_name = "default"
  end
  #
  # View the documentation for the provider you're using for more
  # information on available options.
  
  config.vm.provision "shell" do |foobar|
    foobar.path = "./install.sh"
  end
end
