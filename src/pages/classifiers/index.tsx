import { ChineseRuby } from '@/common/components/Ruby'
import { Classifier } from '@/common/model/model'
import { useEffect, useState } from 'react'
import * as classifierData from "../../data/classifiers.json"
import * as frequencyData from '../../data/existingwordcount.json'


export default function Classifiers() {
    const [classifiers, setClassifiers] = useState<Classifier[] | null>(null)
    const [frequencies, setFrequencies] = useState<any>(null)

    useEffect(() => {
        setClassifiers(classifierData)
        setFrequencies(frequencyData)
    }, [])

    return (
        <div>
            <h1>Measure Classifiers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Jyutping</th>
                        <th>Description</th>
                        <th>Nouns</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {classifiers?.map(c => <ClassifierEntry classifier={c} frequency={frequencies ? frequencies[c.character] : null} />)}
                </tbody>
            </table>
        </div>
    )
}


interface ClassifierEntryProps {
    classifier: Classifier,
    frequency: number
}

function ClassifierEntry({classifier, frequency}: ClassifierEntryProps) {
    return (
        <tr key={classifier.character}>
            <td><a href={"/classifiers/" + classifier.character}><ChineseRuby classifier={classifier} /></a></td>
            <td>{classifier.jyutping}</td>
            <td>{classifier.description}</td>
            <td>{classifier.nouns.map(n => <span>{n}</span>)}</td>
            <td>{frequency}</td>
        </tr>
        
    )
}
