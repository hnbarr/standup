standup

in this app, I'm aiming to create a crud application using material-ui to be the host of my progress in my development post-ACA.

I will be able to add, remove, update and read: notes and daily tasks. 

Daily Tasks/Todos (todos);
    ~have submission boxes to create titles of new task (New Task)
    ~required fields = todo & date-preset for Date.now
    ~once posted, they get added ot a list, until completed by checking box they will remain on todos.
    ~have a archive page to see all completed tasks for records.
    ~have ability to bumb tasks up or down depending on priority
    ~CRUD

Blockers; 
    ~have submission boxes to create notes on troubles, or solutions I stumble upon.
    ~required fields = description, title, focus 
    ~CRUD


PAGES--
Login: (3 sections) DONE!
    ~Returning user login (right side)
    ~New user sign up (right side)
    ~Basic introduction to page (left side)

Dashboard: (5 sections)
    ~SideBar (photo or inital avatar, 'hello name', weather and nav buttons, this will stay active at all times, eg) dashboard and user account)
    ~Blockers
    ~Daily Tasks (plus ability to add new, with modal)
    ~Progress Circle Graph ()based on tasks completed)
    ~Stats (to show since accont creation)
        -tasks completed (number)
        -blockers defeated (number)
        -how often you hit 100% on progress (percent)

User Account: (3 sections)
    ~Profile settings
        -reset stats
        -update email/password
        -change location (for weather and time)
    ~Archived/Completed Blockers (with delete all button)
    ~Archived/Completed Tasks (with delete all button)

Build Using;
    ~Express (routes & controllers)
    ~Mongo  (model & schema)
    ~Redux (actions, reducers, state, store & containers)


