export default function ExamInfo({year, season, type}) {
    season = season[0].toUpperCase() + season.slice(1);
    type = type[0].toUpperCase() + type.slice(1);
    return <div>{season} {year} {type}</div>
}