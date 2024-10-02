import "./index.css";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
      {/* A1 */}
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
        </li>
        <li className="wd-assignment-list-item">
            <p> Multiple Modules | <span className="bold">Not available</span> until May 13 at 12:00am | <span className="bold">Due</span> May 20 at 11:59pm | 100 pts</p>

          {/* Complete On Your Own */}
        </li>
      {/* A2 */}
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + Bootstrap
          </a>
        </li>
        <li className="wd-assignment-list-item">
            <p> Multiple Modules | <span className="bold">Not available</span> until May 20 at 12:00am | <span className="bold">Due</span> May 20 at 11:59pm | 100 pts</p>

          {/* Complete On Your Own */}
        </li>
      {/* A3 */}
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - React + JavaScript
          </a>
        </li>
        <li className="wd-assignment-list-item">
            <p> Multiple Modules | <span className="bold">Not available</span> until May 6 at 12:00am | <span className="bold">Due</span> May 13 at 11:59pm | 100 pts</p>

          {/* Complete On Your Own */}
        </li>
      </ul>
    </div>
);}