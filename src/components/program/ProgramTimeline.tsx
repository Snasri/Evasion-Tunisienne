import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

type ScheduleEntry = {
  time: string;
  activity: string;
};

type ScheduleDay = {
  day: string;
  title: string;
  entries: readonly ScheduleEntry[];
};

type ProgramTimelineProps = {
  schedule: readonly ScheduleDay[];
};

export function ProgramTimeline({ schedule }: ProgramTimelineProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {schedule.map((day, index) => (
        <motion.article
          key={day.day}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="card-wellness h-full"
        >
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-2">
              {day.day}
            </p>
            <h3 className="heading-card text-foreground mb-2">{day.title}</h3>
          </div>

          <div className="space-y-4">
            {day.entries.map((entry) => (
              <div key={`${day.day}-${entry.time}-${entry.activity}`} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                  <Clock3 className="h-4 w-4" />
                </div>
                <div className="border-l border-border pl-4 pb-4">
                  <p className="text-sm font-semibold text-foreground">{entry.time}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{entry.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
