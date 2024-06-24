import { RDFOntologicalTypeBlock } from './rdf-ontological-type-block';
import { RDFVocabularyBlock } from './rdf-vocabulary-block';

interface Props {
  jsonldContext: any;
  propertyName: string;
  type?: string;
  format?: string;
}

export function TypeFormatVocabularyBlock({ type, format, jsonldContext, propertyName }: Props) {
  return (
    <div className="prop-type-container">
      <span className="prop-type">{type}</span>

      {format && <span className="prop-type ms-2">{format}</span>}

      <RDFOntologicalTypeBlock jsonldContext={jsonldContext} propertyName={propertyName} className="ms-2" />

      <RDFVocabularyBlock jsonldContext={jsonldContext} propertyName={propertyName} className="ms-2" />
    </div>
  );
}