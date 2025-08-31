import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux';




const AppliedJobTable = () => {

    const { allAppliedJobs } = useSelector(store => store.job);

    return (
        <div>
            <Table>
                <TableCaption className="text-black">
                    A list of your applied jobs
                </TableCaption>
                <TableHeader>
                    <TableRow >
                        <TableHead className="text-blue-500 hover:text-blue-700">Date</TableHead>
                        <TableHead className="text-blue-500 hover:text-blue-700">Job Role</TableHead>
                        <TableHead className="text-blue-500 hover:text-blue-700">Company</TableHead>
                        <TableHead className="text-right text-blue-500 hover:text-blue-700">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        !allAppliedJobs &&
                        <span className='text-sm hover:text-fuchsia-400'>You haven't applied to any jobs yet.</span>
                    }
                    {
                        allAppliedJobs.length >= 0 && allAppliedJobs?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-black">{item?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-black">{item?.job?.title}</TableCell>
                                <TableCell className="text-black">{item?.job?.company?.companyName}</TableCell>
                                <TableCell className="text-right"><Badge className={`${item.status === "rejected" ? 'bg-red-400' : item.status === "pending" ? 'bg-gray-400' : 'bg-green-400'}`}>{item?.status.toUpperCase()}</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
