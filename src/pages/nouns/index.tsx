import { EngClasses, Word } from "@/common/model/model"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import definitionData from "../../data/definitions.json"

interface NounsProps {
    nouns: Word[]
}

export default function Nouns({ nouns }: NounsProps) {
    return (
        <>
            <h1>{nouns?.length} nouns</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Traditional</th>
                        <th>Jyutping</th>
                    </tr>
                </thead>
                <tbody>
                    {nouns.map(n => <NounSummary noun={n} />)}
                </tbody>
            </table>
        </>
    )
}

interface NounSummaryProps {
    noun: Word
}

export function NounSummary({noun}: NounSummaryProps) {
    return (
        <tr>
            <td>{noun.traditional}</td>
            <td>{noun.jyutping}</td>
        </tr>
    )
}

export async function getStaticProps(context: GetStaticProps) {
    const definitions: Word[] = definitionData
    
    return {
        props: {
            nouns: definitions.filter(d => d.wordClass === EngClasses.Noun).slice(0, 10)
        }
    }
}