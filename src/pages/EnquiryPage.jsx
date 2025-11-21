import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { PageToolbarGroup } from "../components/page-toolbar/PageToolbarGroup";
import { Button } from "../components/ui/button/Button";
import {
  IconMoreVertical,
  IconPlus,
  IconSort,
} from "../assets/icons/interfaceIcons2";
import DataTableAlt from "../components/data-tabel/DataTableAlt";
import { PageSearchBar } from "../components/ui/PageSearchBar";
import { EnquiryStatesList } from "../components/enquiry/EnquiryStatesList";
import Avathar from "../components/ui/Avathar";
import { ActionsCell } from "../components/data-tabel/DataTabelCell";
import { TableHeader } from "../components/data-tabel/TableHeader";

export const EnquiryPage = () => {
  const TABLE_COLUMNS = [
    {
      id: "1",
      head: "#",
      key: "id",
      width: "60px",
      isSortable: true,
      align: "center", // Changed to center
    },
    {
      id: "2",
      head: "Student Name",
      key: "studentName",
      isSortable: true,
      width: "200px", // Added fixed width
      render: ({ studentName, PROFILE_IMG }) => (
        <div className="flex items-center p-4 gap-3 min-w-0">
          <Avathar
            className="size-9 shrink-0"
            imgUrl={PROFILE_IMG || ""}
            loading={false}
          />
          <span className="line-clamp-2 truncate min-w-0">{studentName}</span>
        </div>
      ),
    },
    {
      id: "3",
      head: "Contact",
      key: "contact",
      isSortable: true,
      align: "left",
      width: "140px", // Added fixed width
    },
    {
      id: "4",
      head: "Course Name",
      key: "courseName",
      isSortable: true,
      align: "left",
      width: "250px", // Added fixed width
      render: (row) => (
        <div className="p-4">
          <span className="line-clamp-2">{row.courseName}</span>
        </div>
      ),
    },
    {
      id: "5",
      head: "Status",
      key: "status",
      isSortable: true,
      align: "center", // Changed to center
      width: "120px", // Added fixed width
      render: (row) => (
        <div className="flex justify-center p-4">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                row?.status === "Approved" ? "bg-green-500" : "bg-yellow-500"
              }`}
            ></span>
            <span className="capitalize">{row?.status || "Unknown"}</span>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      head: "Amount",
      key: "amount",
      isSortable: true,
      align: "right", // Changed to right for numbers
      width: "120px", // Added fixed width
      render: (row) => (
        <div className="p-4 text-right">₹ {row.amount.toLocaleString()}</div>
      ),
    },
  ];

  const [enquiryData, setEnquiryData] = useState([
    {
      id: 1,
      studentName: "Arshad",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/0f/81/f0/0f81f0a8a1ec5ff443696c10fff7a543.jpg",
      contact: "9839791811",
      courseName: "Product Photography Techniques",
      status: "Approved",
      amount: 20000,
    },
    {
      id: 2,
      studentName: "Rahul Sharma",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/0f/81/f0/0f81f0a8a1ec5ff443696c10fff7a543.jpg",
      contact: "9876543210",
      courseName: "Advanced Digital Marketing",
      status: "Pending",
      amount: 15000,
    },
    {
      id: 3,
      studentName: "Priya Patel",
      PROFILE_IMG: "",
      contact: "9123456789",
      courseName: "Web Development Bootcamp",
      status: "Pending",
      amount: 25000,
    },
    {
      id: 4,
      studentName: "Amit Kumar Singh",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/0f/81/f0/0f81f0a8a1ec5ff443696c10fff7a543.jpg",
      contact: "9988776655",
      courseName: "Data Science Fundamentals",
      status: "Approved",
      amount: 30000,
    },
    {
      id: 5,
      studentName: "Sneha Gupta",
      PROFILE_IMG: "",
      contact: "9876541230",
      courseName: "UI/UX Design Masterclass",
      status: "Pending",
      amount: 18000,
    },
  ]);

  const [fetchStatus, setFetchStatus] = useState("loading");
  const [searchValue, setSearchValue] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterFormData, setFilterFormData] = useState();

  const handleEdit = (data) => {
    console.log("Edit:", data);
  };

  const createAction = (type, data) => {
    console.log(`${type} action:`, data);
  };

  const totalEnquiries = enquiryData.length;

  const tableActionColumn = {
    id: "7",
    head: "Actions",
    align: "center",
    width: "140px", // Added fixed width
    isFixed: true,
    isLeftFixed: false,
    render: (item) => (
      <div className="flex justify-center p-2">
        <ActionsCell
          className="min-w-[120px] px-2 py-1 flex items-center justify-center gap-2"
          data={item}
          actions={{
            delete: (data) => createAction("delete", data),
            edit: handleEdit,
            changePassword: () => createAction("change-password", item),
          }}
        />
      </div>
    ),
  };

  return (
    <PageContainer className="p-3 pb-0 h-full flex flex-col">
      <div className="px-4 space-y-2.5">
        <EnquiryStatesList />
      </div>

      <PageToolbarGroup
        actions={[
          <div key="toolbar" className="flex items-center gap-3 w-full">
            <div className="flex-grow">
              <PageSearchBar InputClassName="w-full max-w-[40rem]" />
            </div>

            <Button
              size="md"
              variant="secondary"
              className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-300"
              onClick={() => alert("Filter Clicked")}
            >
              <IconSort />
              Filter
            </Button>

            <Button
              size="md"
              variant="secondary"
              className="flex items-center gap-2 bg-black text-white px-3 py-2 hover:bg-gray-800"
            >
              <IconPlus />
              Add New Enquiry
            </Button>
          </div>,
        ]}
      />

      <div className="flex-1 container mx-auto border rounded-lg border-gray-200 bg-white">
        <TableHeader
          title="Enquiry List"
          count={`${totalEnquiries} Enquiries`}
          countVariant="yellow"
          Actions={
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => alert("More options")}
            >
              <IconMoreVertical />
            </Button>
          }
        />
        <div className="overflow-y-auto panel-scrollbar h-[calc(100vh-300px)]">
          <DataTableAlt
            columns={[...TABLE_COLUMNS, tableActionColumn]}
            data={enquiryData}
            isLoading={false}
            containerClassName="h-full"
            className="h-full rounded-t-none"
          />
        </div>
      </div>
    </PageContainer>
  );
};
