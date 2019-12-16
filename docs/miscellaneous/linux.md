# General Reference

## Creating .desktop entries

### Template entry

In the directory `~/.local/share/applications`, create an `APPLICATION.desktop` file, where one should replace `APPLICATION` with the actual name of the application that one wishes to add to the Linux menu. A general template for such a file is

```
[Desktop Entry]

# The type as listed above
Type=Application

# The version of the desktop entry specification to which this file complies
Version=1.0

# The name of the application
Name=jMemorize

# A comment which can/will be used as a tooltip
Comment=Flash card based learning tool

# The path to the folder in which the executable is run
Path=/opt/jmemorise

# The executable of the application, possibly with arguments.
Exec=jmemorize

# The name of the icon that will be used to display this entry
Icon=jmemorize

# Describes whether this application needs to be run in a terminal or not
Terminal=false

# Describes the categories in which this entry should be shown
Categories=Education;Languages;Java;
```

### Categories

The table below lists all Main Categories.

| Main Category | Description | Notes |
| --- | --- | --- |
| AudioVideo | Application for presenting, creating, or processing multimedia (audio/video) |   |
| Audio | An audio application | Desktop entry must include AudioVideo as well |
| Video | A video application | Desktop entry must include AudioVideo as well |
| Development | An application for development |   |
| Education | Educational software |   |
| Game | A game |   |
| Graphics | Application for viewing, creating, or processing graphics |   |
| Network | Network application such as a web browser |   |
| Office | An office type application |   |
| Science | Scientific software |   |
| Settings | Settings applications | Entries may appear in a separate menu or as part of a "Control Center" |
| System | System application, "System Tools" such as say a log viewer or network monitor |   |
| Utility | Small utility application, "Accessories" |   |

The table below describes Additional Categories.

| Additional Category | Description | Related Categories |
| --- | --- | --- |
| Building | A tool to build applications | Development |
| Debugger | A tool to debug applications | Development |
| IDE | IDE application | Development |
| GUIDesigner | A GUI designer application | Development |
| Profiling | A profiling tool | Development |
| RevisionControl | Applications like cvs or subversion | Development |
| Translation | A translation tool | Development |
| Calendar | Calendar application | Office |
| ContactManagement | E.g. an address book | Office |
| Database | Application to manage a database | Office or Development or AudioVideo |
| Dictionary | A dictionary | Office or TextTools |
| Chart | Chart application | Office |
| Email | Email application | Office or Network |
| Finance | Application to manage your finance | Office |
| FlowChart | A flowchart application | Office |
| PDA | Tool to manage your PDA | Office |
| ProjectManagement | Project management application | Office or Development |
| Presentation | Presentation software | Office |
| Spreadsheet | A spreadsheet | Office |
| WordProcessor | A word processor | Office |
| 2DGraphics | 2D based graphical application | Graphics |
| VectorGraphics | Application for viewing, creating, or processing vector graphics | Graphics;2DGraphics |
| RasterGraphics | Application for viewing, creating, or processing raster (bitmap) graphics | Graphics;2DGraphics |
| 3DGraphics | Application for viewing, creating, or processing 3-D graphics | Graphics |
| Scanning | Tool to scan a file/text | Graphics |
| OCR | Optical character recognition application | Graphics;Scanning |
| Photography | Camera tools, etc. | Graphics or Office |
| Publishing | Desktop Publishing applications and Color Management tools | Graphics or Office |
| Viewer | Tool to view e.g. a graphic or pdf file | Graphics or Office |
| TextTools | A text tool utility | Utility |
| DesktopSettings | Configuration tool for the GUI | Settings |
| HardwareSettings | A tool to manage hardware components, like sound cards, video cards or printers | Settings |
| Printing | A tool to manage printers | HardwareSettings;Settings |
| PackageManager | A package manager application | Settings |
| Dialup | A dial-up program | Network |
| InstantMessaging | An instant messaging client | Network |
| Chat | A chat client | Network |
| IRCClient | An IRC client | Network |
| Feed | RSS, podcast and other subscription based contents | Network |
| FileTransfer | Tools like FTP or P2P programs | Network |
| HamRadio | HAM radio software | Network or Audio |
| News | A news reader or a news ticker | Network |
| P2P | A P2P program | Network |
| RemoteAccess | A tool to remotely manage your PC | Network |
| Telephony | Telephony via PC | Network |
| TelephonyTools | Telephony tools, to dial a number, manage PBX, ... | Utility |
| VideoConference | Video Conference software | Network |
| WebBrowser | A web browser | Network |
| WebDevelopment | A tool for web developers | Network or Development |
| Midi | An app related to MIDI | AudioVideo;Audio |
| Mixer | Just a mixer | AudioVideo;Audio |
| Sequencer | A sequencer | AudioVideo;Audio |
| Tuner | A tuner | AudioVideo;Audio |
| TV | A TV application | AudioVideo;Video |
| AudioVideoEditing | Application to edit audio/video files | Audio or Video or AudioVideo |
| Player | Application to play audio/video files | Audio or Video or AudioVideo |
| Recorder | Application to record audio/video files | Audio or Video or AudioVideo |
| DiscBurning | Application to burn a disc | AudioVideo |
| ActionGame | An action game | Game |
| AdventureGame | Adventure style game | Game |
| ArcadeGame | Arcade style game | Game |
| BoardGame | A board game | Game |
| BlocksGame | Falling blocks game | Game |
| CardGame | A card game | Game |
| KidsGame | A game for kids | Game |
| LogicGame | Logic games like puzzles, etc | Game |
| RolePlaying | A role playing game | Game |
| Shooter | A shooter game | Game |
| Simulation | A simulation game | Game |
| SportsGame | A sports game | Game |
| StrategyGame | A strategy game | Game |
| Art | Software to teach arts | Education or Science |
| Construction |   | Education or Science |
| Music | Musical software | AudioVideo or Education |
| Languages | Software to learn foreign languages | Education or Science |
| ArtificialIntelligence | Artificial Intelligence software | Education or Science |
| Astronomy | Astronomy software | Education or Science |
| Biology | Biology software | Education or Science |
| Chemistry | Chemistry software | Education or Science |
| ComputerScience | ComputerSience software | Education or Science |
| DataVisualization | Data visualization software | Education or Science |
| Economy | Economy software | Education or Science |
| Electricity | Electricity software | Education or Science |
| Geography | Geography software | Education or Science |
| Geology | Geology software | Education or Science |
| Geoscience | Geoscience software, GIS | Education or Science |
| History | History software | Education or Science |
| Humanities | Software for philosophy, psychology and other humanities | Education or Science |
| ImageProcessing | Image Processing software | Education or Science |
| Literature | Literature software | Education or Science |
| Maps | Sofware for viewing maps, navigation, mapping, GPS | Education or Science or Utility |
| Math | Math software | Education or Science |
| NumericalAnalysis | Numerical analysis software | Education;Math or Science;Math |
| MedicalSoftware | Medical software | Education or Science |
| Physics | Physics software | Education or Science |
| Robotics | Robotics software | Education or Science |
| Spirituality | Religious and spiritual software, theology | Education or Science or Utility |
| Sports | Sports software | Education or Science |
| ParallelComputing | Parallel computing software | Education;ComputerScience or Science;ComputerScience |
| Amusement | A simple amusement |   |
| Archiving | A tool to archive/backup data | Utility |
| Compression | A tool to manage compressed data/archives | Utility;Archiving |
| Electronics | Electronics software, e.g. a circuit designer |   |
| Emulator | Emulator of another platform, such as a DOS emulator | System or Game |
| Engineering | Engineering software, e.g. CAD programs |   |
| FileTools | A file tool utility | Utility or System |
| FileManager | A file manager | System;FileTools |
| TerminalEmulator | A terminal emulator application | System |
| Filesystem | A file system tool | System |
| Monitor | Monitor application/applet that monitors some resource or activity | System or Network |
| Security | A security tool | Settings or System |
| Accessibility | Accessibility | Settings or Utility |
| Calculator | A calculator | Utility |
| Clock | A clock application/applet | Utility |
| TextEditor | A text editor | Utility |
| Documentation | Help or documentation |   |
| Adult | Application handles adult or explicit material |   |
| Core | Important application, core to the desktop such as a file manager or a help browser |   |
| KDE | Application based on KDE libraries | QT |
| GNOME | Application based on GNOME libraries | GTK |
| XFCE | Application based on XFCE libraries | GTK |
| GTK | Application based on GTK+ libraries |   |
| Qt | Application based on Qt libraries |   |
| Motif | Application based on Motif libraries |   |
| Java | Application based on Java GUI libraries, such as AWT or Swing |   |
| ConsoleOnly | Application that only works inside a terminal (text-based or command line application) |   |

### Creating icons for the .desktop files

# Linux Shell

## Bash functions

A basic example is:

```bash
name(){
  arg1=$1
  arg2=$2
  command on $arg1
}
```
which would be invoked via the following syntax
```bash
name foo bar
```

- An example shell script that would determine whether a given name is a file or directory:
 
```bash
#./cmdargs.sh

#!/bin/bash
file="$1"

# User-defined function
is_file_dir(){
        # $f is local variable
	local f="$1"
        # file attributes comparisons using test i.e. [ ... ]
	[ -f "$f" ] && { echo "$f is a regular file."; exit 0; }
	[ -d "$f" ] && { echo "$f is a directory."; exit 0; }
	[ -L "$f" ] && { echo "$f is a symbolic link."; exit 0; }
	[ -x "$f" ] && { echo "$f is an executeble file."; exit 0; }
}

# make sure filename supplied as command line arg else die
[ $# -eq 0 ] && { echo "Usage: $0 filename"; exit 1; }

# invoke the is_file_dir and pass $file as arg
is_file_dir "$file"
```

which would be invoked as

```bash
./cmdargs.sh /etc/resolv.conf
./cmdargs.sh /bin/date
./cmdargs.sh $HOME
./cmdargs.sh /sbin
```

with sample outputs

```bash
/etc/resolv.conf is a regular file.
/bin/date is a regular file.
/home/ben is a directory.
/sbin is a directory.
```

- An `if/then` example to check whether a __file__ exists or not, and print the output:

```bash
FILE=/etc/resolv.conf
if [ -f "$FILE" ]; then
    echo "$FILE exist"
else 
    echo "$FILE does not exist"
fi
```

If instead one wanted to check whether a __directory__ exists, then one should replace the `-f` with `-d` like so:

```bash
FILE=/etc/resolv.conf
if [ -d "$FILE" ]; then
    echo "$FILE exist"
else 
    echo "$FILE does not exist"
fi
```

For the negation, i.e. to check if a file does __not__ exist, then one should pass the `!` quantifier before the `-f` command:

```bash
FILE=/etc/docker
if [ ! -f "$FILE" ]; then
    echo "$FILE does not exist"
fi
```

To include 'and' conditional statements, one should pass the `-a` or `&&` quantifier between each statement:

```bash
FILE=/etc/docker
if [ -f /etc/resolv.conf -a -f /etc/hosts ]; then
    echo "$FILE is a directory"
fi
```

equivalently:

```bash
FILE=/etc/docker
if [ -f /etc/resolv.conf -a -f /etc/hosts ]; then
    echo "$FILE is a directory"
fi
```

### Function examples

- Extract an archive regardless of file type:

```bash
extract () {
    if [ -f $1 ]; then
        case $1 in
            *.tar.bz2)  tar -jxvf $1                        ;;
            *.tar.gz)   tar -zxvf $1                        ;;
            *.bz2)      bunzip2 $1                          ;;
            *.dmg)      hdiutil mount $1                    ;;
            *.gz)       gunzip $1                           ;;
            *.tar)      tar -xvf $1                         ;;
            *.tbz2)     tar -jxvf $1                        ;;
            *.tgz)      tar -zxvf $1                        ;;
            *.zip)      unzip $1                            ;;
            *.ZIP)      unzip $1                            ;;
            *.pax)      cat $1 | pax -r                     ;;
            *.pax.Z)    uncompress $1 --stdout | pax -r     ;;
            *.Z)        uncompress $1                       ;;
            *)          echo "'$1' cannot be extracted/mounted via extract()" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}
```

- Push dotfiles to a remote host:

```bash
push_dotfiles() {
  local _host
  for _host in "$2"; do
    echo "run at $1@$_host"
    ssh $1@$_host '
      if [ ! $(which git) ]; then
        for installer in apt-get yum port brew; do
          if [ $(which $installer) ]; then break; fi
        done
        sudo $installer install git-core || exit
      fi
      git clone https://github.com/jivoi/dotfiles.git $HOME/.dot
      ln -svf $HOME/.dot/{.bashrc,.cshrc,.gitconfig,.screenrc,.tmux.conf,.tmux.status.conf,.vimrc,.zshrc,bin} $HOME/
      ln -svf $HOME/.dot/ssh_config $HOME/.ssh/config'
  done
}
```

- Determine size of a file or total size of a directory:

```bash
fs() {
	if du -b /dev/null > /dev/null 2>&1; then
		local arg=-sbh
	else
		local arg=-sh
	fi
	if [[ -n "$@" ]]; then
		du $arg -- "$@"
	else
		du $arg .[^.]* *
	fi
}
```

## Aliases

- Adds a new alias and load it immediately via the command line:

```bash
echo "alias aliasname='command'" >> ~/.bash_aliases && source ~/.bash_aliases
```

This can be turned into a function `add-alias` (say), which has inputs `alias name` and `alias command`:

```bash
        function add-alias {
        echo "alias $1='$2'" >> ~/.bash_aliases && source ~/.bash_aliases
}
```

- Change the GNOME wallpaper every 60 seconds

```bash
while [[ 1 -eq 1 ]]; do
  for i in $(echo /usr/share/backgrounds/*.jpg); do
    gsettings set org.gnome.desktop.background picture-uri file:///${i}
    sleep 60;
  done
done
```

# Cheatsheets

## Ssh

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

## Directory and File Manipulation

- Search recursively through directories and moves files of a particular format to a new directory:
    
```bash
find /dir/with/pdfs -name "*.pdf" -exec mv {} /new/dir \;
```

## Miscellaneous

### Local Zotero Website Publishing with Zotsite

```zotsite export -o <BASE_DIR>/zotsite/public -c <BASE_DIR>/zotsite/config```

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