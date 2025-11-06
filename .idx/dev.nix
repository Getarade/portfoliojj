{ pkgs, ... }:
{
  # Settings for your project's development environment.
  #
  # The following example defines a development shell that includes the Go
  # compiler and gopls, the Go language server. It also tells `idx` to open
  # a web preview of the app on port 8080 when you run `go run .`.
  # 
  # To learn more, visit https://www.jetpack.io/devbox/docs/configuration/
  # and https://www.jetpack.io/devbox/docs/ide-integration/idx/
  # 
  # environment: {
  #   # Packages to install in the development environment.
  #   #
  #   # You can find the list of available packages at
  #   # https://search.nixos.org/packages
  #   pkgs = [
  #     pkgs.go
  #     pkgs.gopls
  #   ];
  # };

  previews: {
    # The following says that `idx` should open a web preview of the app
    # on port 8080 when it detects that the `go run .` command is running.
    # 
    # You can change the command to fit your app's run command.
    # You can also add more previews for other commands.
    # web: {
    #   command = [ "go" "run" "." ];
    #   port = 8080;
    #   # The following says that `idx` should not open the preview automatically.
    #   # You can still open it manually from the Previews panel.
    #   # manager = "manual";
    # };
    web: {
      command = ["python" "-m" "http.server" "8080"];
      port = 8080;
    };
  };
}