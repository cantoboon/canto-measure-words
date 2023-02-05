



export default function Classifier({ classifier }: any) {
    return (
        <></>
    )
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }: any) {
    const classifierCharacter = params.id;

    return {
        props: {
            classifier: {}   
        }
    }
    
}