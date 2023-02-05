import * as React from "react"
import { Classifier } from "@/common/model/model"
import styles from "./Ruby.module.css"

interface ChineseRubyProps {
    classifier: Classifier
}

export function ChineseRuby({classifier}: ChineseRubyProps) {
    return (
        <ruby>
            {classifier.character} <rp>(</rp><rt>{classifier.jyutping}</rt><rp>)</rp>
        </ruby>
    )
}
