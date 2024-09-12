import { Spinner } from 'design-react-kit';
import { basename, useRDFPropertyResolver as useRDFPropertyResolver } from '../../hooks';

export function RDFOntologicalClassPropertyBlock({ fieldUri }) {
  const { data, status } = useRDFPropertyResolver(fieldUri);

  if (status === 'pending') {
    return (
      <span className="d-inline-block align-middle">
        <Spinner active small />
      </span>
    );
  }

  // When the fieldUri is null, it means that it has been dis-associated from the schema. See https://www.w3.org/TR/json-ld11/#terminology
  if (!fieldUri) {
    return null;
  }

  // When the fieldUri is not null, but the data is null, it means that the fieldUri was not found on SparQL.
  if (!data?.ontologicalClass) {
    return <><span title={`URI not found: ${fieldUri}. Do you need to disassociate it from the @context?`}>⚠</span></>;
  }

  const rdfProperty = (
    <>
      <a href={data.ontologicalClass} target='_blank' rel='noreferrer'>
        {basename(data.ontologicalClass)}
      </a>
      {data.ontologicalProperty && (
        <>
          .
          <a href={data.ontologicalProperty} target='_blank' rel='noreferrer'>
            {basename(data.ontologicalProperty)}
          </a>
        </>
      )}
    </>
  );

  return (
    <>
    <span
      className="rdf-ontological-class-property"
      style={{ textDecoration: rdfProperty ? 'underline dotted' : 'none' }}
    >
      [{rdfProperty}]
    </span>
    <span
      className="rdf-ontological-class-property ms-2 badge bg-primary"
      >
        <br />
        {data?.ontologicalPropertyComment}
      </span>
    </>
  );
}
