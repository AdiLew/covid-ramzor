
import GaugeChart from 'react-gauge-chart';
import colors from '../consts/colors';

const Gauge = (props) => {
    const { score } = props;
    const maxScore = 10;
    const colorsArray = Object.values(colors).reverse();

    const arcsLength = colorsArray.reduceRight((arcsLength, currentColor, currentIndex, array) => {
        if (currentIndex === array.length - 1) {
            arcsLength.push(maxScore - currentColor.minScore);
        } else {
            const prevColor = array[currentIndex + 1];
            arcsLength.push(prevColor.minScore - currentColor.minScore);
        }
        return arcsLength;
    }, []).reverse()
    const arcColors = colorsArray.map(c => c.color);

    return (
        <GaugeChart
            arcsLength={arcsLength}
            colors={arcColors}
            percent={score / 10}
            arcPadding={0.02}
            hideText={true}
        />
    );
}

export default Gauge;