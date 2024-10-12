{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-24.05";  # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs
    pkgs.go
  ];

  # Sets environment variables in the workspace
  env = {
    # You can get a Gemini API key through the IDX Integrations panel to the left!
    GOOGLE_API_KEY = "";
    PROJECT_ID = "genkit-idx";
    GCLOUD_PROJECT = "genkit-idx";
    CREDS_FILE = "/home/user/.config/gcloud/application_default_credentials.json";
  };

  # Enable previews and customize configuration
  idx = {
    workspace = {
      onStart = {
        creds = "export GCLOUD_SERVICE_ACCOUNT_CREDS=$(cat /home/user/.config/gcloud/application_default_credentials.json)";
      };
    };
    previews = {
      enable = true;
      previews = [
        {
          command = [
            "npx"
            "genkit"
            "start"
            "--port"
            "$PORT"
          ];
          manager = "web";
          id = "web";
        }
      ];
    };
  };
}
