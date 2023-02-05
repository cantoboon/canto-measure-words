
// https://en.wikipedia.org/wiki/List_of_Chinese_classifiers
export interface Classifier {
    character: string,
    jyutping: string,
    description: string,
    nouns: string[],
}

export interface Example {
    yue: string,
    eng: string
}

export interface Explanation {
    yue: string,
    eng: string,
    examples: Example[]
}

export interface Word {
    id: string,
    traditional: string,
    jyutping: string,
    wordClass: EngClasses,
    explanations: Explanation[],
}

/*
 * These are word classes within Chinese. CantoWords lists these. Some do not have definitions so were omitted.
 * For this project we're really interested in measure words and nouns.
 * https://en.wikipedia.org/wiki/Part_of_speech
 */
// 
export const enum YueClasses {
    名詞, // Noun https://cantowords.com/dictionary/%E5%90%8D%E8%A9%9E
    代詞, // Pronoun https://cantowords.com/dictionary/%E4%BB%A3%E8%A9%9E
    副詞, // Adverb https://cantowords.com/dictionary/%E5%89%AF%E8%A9%9E
    助詞, // Final particle https://cantowords.com/dictionary/%E5%8A%A9%E8%A9%9E
    動詞, // Verb https://cantowords.com/dictionary/%E5%8B%95%E8%A9%9E
    區別詞, // Distinguishing word; non-predicate adjective https://cantowords.com/dictionary/%E5%8D%80%E5%88%A5%E8%A9%9E
    形容詞, // Adjective https://cantowords.com/dictionary/%E5%BD%A2%E5%AE%B9%E8%A9%9E
    擬聲詞, // onomatopoeia https://cantowords.com/dictionary/%E6%93%AC%E8%81%B2%E8%A9%9E
    數詞, // numerals https://cantowords.com/dictionary/%E6%95%B8%E8%A9%9E
    詞綴, // affix https://cantowords.com/dictionary/%E8%A9%9E%E7%B6%B4
    語素, // morpheme https://cantowords.com/dictionary/%E8%AA%9E%E7%B4%A0
    量詞, // measure word https://cantowords.com/dictionary/%E9%87%8F%E8%A9%9E
    語句, // expression. Not available on https://cantowords.com/dictionary/%E8%AA%9E%E5%8F%A5 yet. You can see an example here https://cantowords.com/dictionary/wan/?q=jat1&pos=
}

/*
 * These are the equivalent English classes 
 */
export const enum EngClasses {
    Noun = "名詞",
    Pronoun = "代詞",
    Adverb = "副詞",
    FinalParticle = "助詞",
    Verb = "動詞",
    NonPredicateAdjective = "區別詞",
    Adjective = "形容詞",
    Onomatopoeia = "擬聲詞",
    Numerals = "數詞",
    Affix = "詞綴",
    Morpheme = "語素",
    MeasureWord = "量詞",
    Expression = "語句",
}
