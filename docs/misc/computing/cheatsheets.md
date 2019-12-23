# Cheatsheets

## bash

### Directory and File Manipulation

- Search recursively through directories and moves files of a particular format to a new directory:
    
```bash
find /dir/with/pdfs -name "*.pdf" -exec mv {} /new/dir \;
```

## ssh

- Send a command remotely via ssh:

```bash
ssh -p 22 user@example.com -t 'sudo apt-get update && sudo apt-get upgrade -y'
```

Here, the `-t` option is used if user interaction is required, which in this example would be to under the password of the user.

- To send multiple commands in one ssh connection, separate the commands with a semi-colon `;`:

```bash
ssh -p 22 user@example.com 'cd ~/Downloads; ls -alh'
```

The problem is as you may suspect, your .bashrc is not being sourced. You had the right idea by adding the -l flag but what you really need in this case is the -i flag to spawn an interactive shell, in-turn sourcing your .bashrc prior to command execution. 

- By default, the remote user's `.bashrc` and `.bash_profile` files are not sourced when sending a command via ssh, so for example commands relying on the remote user's `$PATH` configuration will respond with the application not being run. To remedy this, one can spawn an interactive shell prior to executing the command by prefixing `"bash -i -c '<ssh command>'"` like so:

```bash
ssh user@example.com -t 'bash -i -c "cd /var/www/html && npm run build"'

```

## Python

### Virtual Environments for Local Development

The following command will create a new directory within your current directory, which in this example will be named 'virtual':

```python
python -m venv virtual
```

The `venv` creates the directory 'virtual' and places the necessary virtual environment files inside of it. In particular within the `virtual/bin` tree will be the `python` and `pip` executables.

## Git

### Setup

- Set a name that is identifiable for credit when review version history:

```git config --global user.name “[firstname lastname]”```

- Set an email address that will be associated with each history marker:

```git config --global user.email “[valid-email]”```

### Setup & Initialisation

- Initialise an existing repository as an existing repository:

```git init```

- Retrieve an entire repository from a hosted location via URL:

```git clone [url]```

### Stage & Snapshot

- Show modified files in working directory, staged for your next commit:

```git status```

- Add a file as it looks now to your next commit (stage):

```git add [file]```

- Unstage a file while retaining the changes in working directory:

```git reset [file]```

- Diff of what is changed but not staged:

```git diff```

- Diff of what is staged but not yet commited:

```git diff --staged```

- Commit your staged content as a new commit snapshot:

```git commit -m “[descriptive message]”```
