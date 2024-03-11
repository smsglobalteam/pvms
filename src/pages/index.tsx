import { Button, Group, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import AppHeader from '../components/AppHeader.tsx'
import AppClientTable from '../components/AppClientTable.tsx'

const records = [
  {
    id: '1323addd-a4ac-4dd2-8de2-6f934969a0f1',
    name: 'Feest, Bogan and Herzog',
    streetAddress: '21716 Ratke Drive',
    city: 'Stromanport',
    state: 'WY',
    missionStatement: 'Innovate bricks-and-clicks metrics.',
  },
  {
    id: '0cf96f1c-62c9-4e3f-97b0-4a2e8fa2bf6b',
    name: 'Cummerata - Kuhlman',
    streetAddress: '6389 Dicki Stream',
    city: 'South Gate',
    state: 'NH',
    missionStatement: 'Harness real-time channels.',
  },
  {
    id: 'bba53ee9-385f-4b3d-a9a4-613ced38ff2c',
    name: 'Goyette Inc',
    streetAddress: '8873 Mertz Rapid',
    city: 'Dorthyside',
    state: 'ID',
    missionStatement: 'Productize front-end web services.',
  },
  {
    id: '3d80d34a-4aff-468a-b4e5-e17658f7635e',
    name: 'Runte Inc',
    streetAddress: '2996 Ronny Mount',
    city: 'McAllen',
    state: 'MA',
    missionStatement: 'Engage synergistic infrastructures.',
  },
  {
    id: '3ae22e52-335e-4e49-9e26-f5e0089edb76',
    name: 'Goldner, Rohan and Lehner',
    streetAddress: '632 Broadway Avenue',
    city: 'North Louie',
    state: 'WY',
    missionStatement: 'Incubate cross-platform metrics.',
  },
  {
    id: '6e9372ad-6b30-40c1-bd05-30211cd00ed2',
    name: 'Doyle, Hodkiewicz and O\'Connell',
    streetAddress: '576 Joyce Ways',
    city: 'Tyraburgh',
    state: 'KS',
    missionStatement: 'Scale web-enabled e-business.',
  },
  {
    id: '2d0ddea1-ee92-477e-8d63-6d0508749ae6',
    name: 'Rau - O\'Hara',
    streetAddress: '7508 Lansdowne Road',
    city: 'Shieldsborough',
    state: 'MI',
    missionStatement: 'Innovate real-time applications.',
  },
  {
    id: '1c509c99-109e-4f2c-bc76-03c23b839222',
    name: 'Tillman - Jacobi',
    streetAddress: '57918 Gwendolyn Circles',
    city: 'Sheridanport',
    state: 'MI',
    missionStatement: 'Matrix viral synergies.',
  },
  {
    id: '74207e6f-91a7-49a3-8eb4-b0c95cda3105',
    name: 'Connelly, Feest and Hodkiewicz',
    streetAddress: '7057 Stanley Road',
    city: 'Kearaburgh',
    state: 'CA',
    missionStatement: 'Maximize dynamic e-commerce.',
  },
  {
    id: '3fdba2fc-2347-464b-b29a-3ef8f03ccf56',
    name: 'Shanahan, Robel and Beier',
    streetAddress: '378 Berta Crescent',
    city: 'West Gerry',
    state: 'KS',
    missionStatement: 'Synthesize customized portals.',
  },
]

export default function Index() {
  return (
    <>
      <AppHeader title="Profiles" />
      <AppClientTable
        id="profiles"
        tableProps={{
          records,
          columns: [
            { accessor: 'name' },
            {
              accessor: 'streetAddress',
              title: 'Address',
              render: row => `${row.streetAddress}, ${row.city}, ${row.state}`,
            },
            { accessor: 'missionStatement' },
            {
              accessor: 'actions',
              title: 'Actions',
              textAlign: 'right',
              render: row => (
                <Group gap={4} justify="right" wrap="nowrap">
                  <Button
                    size="xs"
                    variant="light"
                    color="gray"
                  >
                    Edit
                  </Button>
                  <Button
                    size="xs"
                    variant="light"
                    color="red"
                    onClick={() => modals.openConfirmModal({
                      title: `Delete ${row.name}`,
                      children: <Text size="sm">Would you like to delete this person? This action is permanent and irreversible.</Text>,
                      labels: {
                        cancel: 'Cancel',
                        confirm: `Delete profile`,
                      },
                      confirmProps: {
                        color: 'red',
                      },
                    })}
                  >
                    Delete
                  </Button>
                </Group>
              )
              ,
            },
          ],
        }}
      />
    </>
  )
}
