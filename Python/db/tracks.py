import sqlite3
import xml.etree.ElementTree as ET

# connecting to db , creating tables
conn = sqlite3.connect('trackdb.sqlite')
cur = conn.cursor()

cur.executescript('''
        DROP TABLE IF EXISTS Tracks;
        DROP TABLE IF EXISTS Album;
        DROP TABLE IF EXISTS Genre;
        DROP TABLE IF EXISTS Artist;

        CREATE TABLE Artist (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        name TEXT UNIQUE
        );

        CREATE TABLE Genre (
        id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        name    TEXT UNIQUE
        );

        CREATE TABLE Album (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        artist_id INTEGER,
        title TEXT UNIQUE
        );

        CREATE TABLE Track (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        title TEXT UNIQUE,
        album_id INTEGER,
        genre_id  INTEGER,
        length INTEGER, rating INTEGER, counts INTEGER
        );
''')



def lookup(d,key):
    found = False
    for child in d:
        if found: return child.text
        if child.tag == 'key' and child.text == key:
            found = True
    return None

# # opening xml file
fname = input("Enter file name: ")
if len(fname) < 1: fname = 'Library.xml'
fdata = ET.parse(fname)
data = fdata.findall('dict/dict/dict')
for item in data:
    if lookup(item, 'Track ID') is None: continue

    name = lookup(item, 'Name')
    artist = lookup(item, 'Artist')
    album = lookup(item, 'Album')
    genre = lookup(item, 'Genre')
    counts = lookup(item, 'Play Count')
    rating = lookup(item, 'Rating')
    length = lookup(item, 'Total Time')


    if name is None or artist is None or album is None or genre is None : continue

    cur.execute(''' INSERT OR IGNORE INTO Artist (name) VALUES (?)''',(artist, ))
    cur.execute('SELECT id FROM Artist WHERE name = ? ',(artist,))
    artist_id = cur.fetchone()[0]

    cur.execute(''' INSERT OR IGNORE INTO Genre (name) VALUES (?)''',(genre,))
    cur.execute('SELECT id FROM Genre WHERE name = ? ',(genre,))
    genre_id = cur.fetchone()[0]

    cur.execute(''' INSERT OR IGNORE INTO Album (artist_id,title) VALUES (?,?)''',(artist_id,album))
    cur.execute('SELECT id FROM Album WHERE title = ? ',(album,))
    album_id = cur.fetchone()[0]

    cur.execute(''' INSERT OR REPLACE INTO Track (title,album_id,genre_id,length,rating,counts ) VALUES (?,?,?,?,?,?)''',(name,album_id,genre_id,length,rating,counts))

conn.commit()
