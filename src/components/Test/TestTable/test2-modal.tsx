import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Test } from "./test-columns"; // Import the Test type

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Test | null;
}

const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle>{data.title}</DialogTitle>
          <DialogDescription>Exam ID: {data.id}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 bg-white">
          <div>
            <h3 className="text-lg font-semibold mb-2">General Information</h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Question Count</TableCell>
                  <TableCell>{data.questioncount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Duration</TableCell>
                  <TableCell>{data.duration} minutes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Attempts</TableCell>
                  <TableCell>{data.attempts}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Status</TableCell>
                  <TableCell>{data.status}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {data.sections && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Sections</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Questions</TableHead>
                    <TableHead>Maximum Marks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.sections.map((section, index) => (
                    <TableRow key={index}>
                      <TableCell>{section.title}</TableCell>
                      <TableCell>{section.questions}</TableCell>
                      <TableCell>{section.maximum_marks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        {data.results && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Previous Attempts</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Attempt</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Marks Obtained</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.previous_attempts}</TableCell>
                    <TableCell>{result.attempted_on}</TableCell>
                    <TableCell>{result.marks_obtained}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExamModal;