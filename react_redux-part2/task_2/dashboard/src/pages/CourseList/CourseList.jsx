import CourseListRow from './CourseListRow/CourseListRow';
import { useSelector, useDispatch } from 'react-redux';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';
import './CourseList.css'
import WithLogging from '../../components/HOC/WithLogging';

function CourseList() {
    const { courses } = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    const onChangeRow = (id, checked) => {
        if (checked) {
            dispatch(selectCourse(id));
        } else {
            dispatch(unSelectCourse(id));
        }
    }

    return (
        <div className="courses">
            {courses.length > 0 ? (
                <table id="CourseList">
                    <thead>
                        <CourseListRow textFirstCell="Available courses" isHeader={true} />
                        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                isSelected={course.isSelected}
                                onChangeRow={onChangeRow}
                                id={course.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <table id="CourseList">
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell="No course available yet" />
                    </thead>
                </table>
            )}
        </div>
    );
}

export default WithLogging(CourseList);
