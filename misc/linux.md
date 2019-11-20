# Linux Computing

## Cheatsheets

### Markdown



### Git

#### Setup

- Set a name that is identifiable for credit when review version history:

```git config --global user.name “[firstname lastname]”```

- Set an email address that will be associated with each history marker:

```git config --global user.email “[valid-email]”```

#### Setup & Initialisation

- Initialise an existing repository as an existing repository:

```git init```

- Retrieve an entire repository from a hosted location via URL:

```git clone [url]```

#### Stage & Snapshot

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