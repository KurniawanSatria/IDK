{pkgs}: {
deps = [
  pkgs.nodePackages.prettier
pkgs.nodejs_latest
pkgs.libuuid
pkgs.imagemagick
];
env = { LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];  }; 
}
