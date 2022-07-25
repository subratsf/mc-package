echo "**** Build started ****"

# Set build type
buildType="prd"
if [ "$1" ]; then
  if [ $1="preview" ]; then
   buildType="preview"
  fi
fi

# Get the directory
doc_tool_dir="$(cd "$(dirname "$0")"; pwd)"
authoring_repo_dir=$(pwd)

# Run the script
npm run build --prefix "$doc_tool_dir" -- --docContentSource=$authoring_repo_dir/content --docTeam=mc --target=$buildType --force

echo "**** Build completed ****"
