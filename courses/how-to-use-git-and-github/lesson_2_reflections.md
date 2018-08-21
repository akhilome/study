# Lesson 2 Reflections

Generally lesson 2 is centered around creating and modifying a Git Repo.  

Major concepts (_I think_) that were touched on in this lesson included:

* Initializing a Repo (git init)
* The staging area
* Committing
* Branching
* Merging

Here are my reflections from this lesson.

### What happens when you initialize a repository? Why do you need to do it?

As seen from [a] previous command I ran in the Shell terminal, initializing a folder (read: repo) using the git init command adds the necessary .git files into that folder which enables git to start tracking the folder for changes.

Regarding why this HAS to be done, I think my previous paragraph answered this question in part -- so that git can start tracking the repo!

### How is the staging area different from the working directory and the repository? What value do you think it offers?

The staging area (SA) is different from the working directory (WD) in the sense that files which are placed in the SA are considered ready for "commitment".

The value of having a SA is cleary apparent when you consider the fact that sometimes, not all files present in the WD maybe be finished up and ready for committing. Hence only files ready to be committed can be moved into the SA and be, eventually, committed.

Shit! My grammar is all messed up.

### How can you use the staging area to make sure you have one commit per logical change?

Pretty straightforward:

For every "logical change" you've made to the project, add all files which were involved in effecting that change to the SA, and commit them all at once.

### What are some situations when branches would be helpful in keeping your history organized? How would branches help?

When you want to test out/add new features, I guess?

### How do the diagrams help you visualize the branch structure?

Diagrams drawn of the commit history (git log) helps trace and place each commit in the appropriate branch so that in visualizing the whole project's commit history, there's a "big picture".

### What is the result of merging two branches together? Why do we represent it in the diagram the way we do?

The result of merging two branches is ... one. unified. branch... containing all of the changes from both merged branch -- that is, of course, if there were no merge conflicts during the course of automatic merging.

I'd say the representation in 'the diagram', apart from the 'helping one to visualize' part, is done in that way to show at exactly what point on the master branch, or whichever branch is checked out during the merge, the merge was initiated.

### What are the pros and cons of Git’s automatic merging vs. always doing merges manually?

I, honestly, do not know **exactly** what is meant by _manual merging_, but if by that you mean manually comparing two versions of the same file to check for any differences and eventually combining them into one single file to 'represent' them both, then, here goes ...

For one, git's auto-merge feature eliminates the tedious and rather mundane task of having to check various versions of similar file only to find and merge the retlatively few lines which would need merging. That's a **huge** PRO. 

The con here would have to be the fact that auto merging would occassionally merge what, logically, may not be meant to be merged. But that's where the concept of having 'Merge conflicts' help, I think. So, this con may have already been conquered. Pun intended :)