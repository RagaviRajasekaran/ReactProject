import "./App.css";
import Note from "./components/Note";

function App({notes}) {
  return (
    <div>
      <div className="container p-5 bg-primary ">
        <div className="row">
          {notes.map((note) => (
            <div className="col" key={note.id}>
              <div className="card">
                <div className="card-body">
                  <Note note={note} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App