import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExamSchema } from './es-columns';

type ExamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: ExamSchema | null;
};

const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  const statusColor = {
    pending: "bg-yellow-500",
    processing: "bg-blue-500",
    success: "bg-green-500",
    failed: "bg-red-500",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{data.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Target Group:</strong> {data.targetgroup}</p>
            <p><strong>Exam Type:</strong> {data.examtype}</p>
            <p><strong>Duration:</strong> {data.duration} minutes</p>
          </div>
          <div>
            <p><strong>Total Questio:</strong> {data.total_question}</p>
            <p><strong>Total Max Marks:</strong> {data.total_max_marks}</p>
            <p>
              <strong>Status:</strong>{' '}
              <Badge className={statusColor[data.status]}>
                {data.status}
              </Badge>
            </p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <Card>
          <CardHeader>
            <CardTitle>Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Questions:</strong> {section.questions}</p>
                    <p><strong>Marking:</strong> {section.marking}</p>
                    <p><strong>Max Marks:</strong> {section.max_marks}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Separator className="my-4" />
        
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            {data.statistics.map((stat, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <p><strong>Stocks Sold:</strong> {stat.stocks_sold}</p>
                <p><strong>Income:</strong> ${stat.income}</p>
                <p><strong>Outbound Days:</strong> {stat.outbond_days}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ExamModal;