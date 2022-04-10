import { useState } from 'react'
import isEmpty from 'lodash/isEmpty'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function EmployeeList({
    employees,
    selectedEmployees,
    onSelect
}) {
    const [checked, setChecked] = useState(selectedEmployees)

    const handleToggle = (value) => () => {
        let currentIndex = checked.indexOf(value)
        let newChecked = [...checked]

        if (currentIndex < 0) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        onSelect(newChecked)
    };

    return isEmpty(employees) ? (
            <Box p={2} sx={{ textAlign: 'left' }}>
                <Typography color="text.secondary">
                    No Employees
                </Typography>
            </Box>
        ) : (
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {employees && employees.map((employee) => {
                    let labelId = `checkbox-list-secondary-label-${employee?.data?.id}`

                    return (
                        <ListItem
                            key={employee?.data?.id}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(employee?.data?.id)}
                                    checked={checked.indexOf(employee?.data?.id) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar>
                                        {employee?.data?.short_name}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    id={labelId} 
                                    primary={employee.fullName} 
                                    secondary={employee.role} 
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        )
}