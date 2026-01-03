# Using nvm to Avoid npm Permission Issues

## ✅ What We Fixed

Your npm cache had root-owned files causing permission errors. We've set up nvm (Node Version Manager) so you **never need sudo** for npm commands.

## 🎯 Current Setup

- **nvm version**: 0.39.7
- **Default Node version**: v20.19.5 (managed by nvm)
- **npm prefix**: `/Users/shivvyas/.nvm/versions/node/v20.19.5` (your home directory, no sudo needed!)

## 📝 Common nvm Commands

### Check current Node version
```bash
node --version
nvm current
```

### List installed Node versions
```bash
nvm list
```

### Switch Node versions
```bash
nvm use 20.19.5        # Use specific version
nvm use default        # Use default version
nvm use 18             # Use latest v18.x
```

### Install new Node versions
```bash
nvm install 22         # Install latest v22
nvm install --lts      # Install latest LTS version
nvm install 20.19.5    # Install specific version
```

### Set default version
```bash
nvm alias default 20.19.5
```

## ⚠️ Important Rules

1. **NEVER use `sudo npm install`** - This causes permission issues
2. **Always use nvm-managed Node** - Check with `npm config get prefix` (should be in `~/.nvm/`)
3. **If you see `/usr/local` as npm prefix** - Run `nvm use default` to switch back

## 🔧 If You Still Have Issues

### Fix npm cache permissions (run once):
```bash
sudo chown -R $(whoami):$(id -gn) "/Users/shivvyas/.npm"
```

### Clear npm cache:
```bash
npm cache clean --force
```

### Verify you're using nvm Node:
```bash
which node
# Should show: /Users/shivvyas/.nvm/versions/node/v20.19.5/bin/node
# NOT: /usr/local/bin/node
```

## 🚀 For This Project

You can create a `.nvmrc` file in your project root to automatically use the right Node version:

```bash
echo "20.19.5" > .nvmrc
```

Then when you `cd` into the project, run:
```bash
nvm use
```

Or add this to your `.zshrc` to auto-switch:
```bash
# Auto-switch Node version when entering directory with .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```




