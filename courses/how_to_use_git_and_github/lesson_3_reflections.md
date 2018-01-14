# Reflections For Lesson 3

The lesson 3 of the course is focussed loosely around how to use GitHub.

Here, one gets introduced to the GitHub platform and the concept of GitHub being a remote to your local repo is introduced early on in the lesson.

As always, here are the major concepts touched on during this lesson:

* git push
* git pull
* git fetch
* forking on GitHub
* making pull requests
* Adding upstream remotes

And the reflections:

### Why might you want to always pull changes manually rather than having Git automatically stay up-to-date with your remote repository?

Git? Automatically pull changes from origin? Well, that might be a bad idea in my opinion, and here's why:

Since pulling from remote updates local, some changes to the repo made on local which you **want** to keep might get lost if git takes control of pulling.

### Describe the differences between forks, clones, and branches. When would you use one instead of another?

First, brief descriptions:

Forks or rather forking, is like cloning, but for GitHub. Forks can not be created locally. Forking clones the repo of another user into your GitHub account.

Clones, or cloning literally means just that, cloning. A clone of a remote repo can be downloaded from the remote server (GitHub) using the 'git clone' command.

Branches, as have been previously discussed, are neither clones nor forks in the literal GitHub sense, but are sort of like mini-clones but within a particular repo. When a new branch is created, the branch is contained within the same repo as it was created.

_**FYI**, I typed this particular reflection half awake. Good night!_

### What is the benefit of having a copy of the last known state of the remote stored

While working with a remote repo with multiple contributors, having a copy of the last known state of the remote stored locally would be invaluable when you want to know/keep tack of the changes that have been made to the remote while you've been away.

_Shit! I didn't think deeply enough about this reflection_

### How would you collaborate without using Git or GitHub? What would be easier, and what would be harder?

Collaborating on code without using Git/GitHub would be manual collaboration.

Of course collaborating manually would be a lot harder. This would mean that collaboration over long distances (e.g. across continents) would be nigh impossible.

### When would you want to make changes in a separate branch rather than directly in master? What benefits does each approach have?

Ok, it has been generally established in this course that the master branch of any git repo is the main/lead branch. It's sort of the branch which contains the 'production-level' code, so, making somewhat experimental changes to this branch seems like a bad idea.

So, to answer the question of when, I'd say when you want to add new changes (mostly experimental) to the codebase since adding directly into master would most likely result in one breaking something.

To answer the second question in one fell swoop, I'd say the use of seperate branches greatly reduces the risk of introducing bugs into the production-level code.