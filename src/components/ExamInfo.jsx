import "./components.css";

export default function ExamInfo({year, season, type}) {
    season = season[0].toUpperCase() + season.slice(1);
    type = type[0].toUpperCase() + type.slice(1);
    return <div id="exam-info"><h2>{season} {year} <span className="type">{type}</span></h2></div>
}