class History(db.Model):
    id = db.Columns(db.Integer, primary_key=True)
    url = db.Columns(db.String)
    video = db.Columns(db.String)
    audio = db.Columns(db.String)
    data = db.Columns(db.JSONB)
