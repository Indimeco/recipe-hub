# Breadcrumb book name change bug
This is actually a result of the Apollo store not being updated.
The Apollo store isn't updated because the mutation for editing a book name returns the user document from the database.
Meanwhile, the Breadcrumbs are reading from the book collection in the database, which wasn't updated in the Apollo store from said mutation.
Thus, this bug is actually the result of me deciding to write to the DB twice for a single piece of info.
My options now are to either manually write the change to the Apollo store or to refactor the DB to write to a single location.
This will be dependent on my current mongodb course; I hope to learn what the best practice vs performance is.