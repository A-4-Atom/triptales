const journalSchema = {
  name: 'journalEntries',
  type: 'document',
  title: 'Journal Entries',
  fields: [
    {
      name: 'image',
      type: "image",
      title: "Image"
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: "location",
      type: "string",
      title: "Location"
    },
    {
      name: 'mapsUrl',
      type: "url",
      title: "Google Maps URL"
    },
    {
      name: 'startDate',
      type: 'date',
      title: "Start Date"
    },
    {
      name: 'endDate',
      type: 'date',
      title: "End Date"
    },
    {
      name: 'description',
      type: 'text',
      title: "Description"
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Unique ID',
      options: {
        source: 'title',
        maxLength: 15
      }
    }
  ]
}



export const schemaTypes = [journalSchema]
