const myTrips = {
  name: 'journalEntries',
  type: 'document',
  title: 'My Trips',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'mapsUrl',
      type: 'url',
      title: 'Google Maps URL',
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Unique ID',
      options: {
        source: 'title',
        maxLength: 15,
      },
    },
  ],
}

const futureTrips = {
  name: 'futureJournalEntries',
  type: 'document',
  title: 'Future Trips',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'mapsUrl',
      type: 'url',
      title: 'Google Maps URL',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Unique ID',
      options: {
        source: 'title',
        maxLength: 15,
      },
    },
  ],
}

export const schemaTypes = [myTrips, futureTrips]
